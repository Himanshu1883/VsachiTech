/**
 * Faithful port of DistortedPixels by Codrops (MIT)
 * https://github.com/akella/DistortedPixels
 */
import * as THREE from "three";
import fragmentShader from "../../../shaders/distortedPixels/fragment.glsl?raw";
import vertexShader from "../../../shaders/distortedPixels/vertex.glsl?raw";

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

export function createDistortedPixels({ container, image }) {
  if (!container || !image) return null;

  const settings = {
    grid: 34,
    mouse: 0.18,
    strength: 0.45,
    relaxation: 0.93,
    displacement: 0.011,
  };

  const scene = new THREE.Scene();
  let width = container.offsetWidth;
  let height = container.offsetHeight;
  let size = settings.grid;
  let dataTexture = null;
  let material = null;
  let geometry = null;
  let plane = null;
  let rafId = null;
  let isPlaying = true;
  let time = 0;

  const mouse = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    vX: 0,
    vY: 0,
  };

  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0xeeeeee, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;display:block;";
  container.appendChild(renderer.domElement);

  const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -1000, 1000);
  camera.position.set(0, 0, 2);

  function regenerateGrid() {
    size = settings.grid;
    const gridW = size;
    const gridH = size;
    const count = gridW * gridH;
    // RGBA required for float textures in WebGL2; .rg channels match repo RGB layout
    const data = new Float32Array(4 * count);

    for (let i = 0; i < count; i++) {
      const stride = i * 4;
      const r = Math.random() * 255 - 125;
      const r1 = Math.random() * 255 - 125;
      data[stride] = r;
      data[stride + 1] = r1;
      data[stride + 2] = r;
      data[stride + 3] = 0;
    }

    if (dataTexture) {
      dataTexture.dispose();
    }

    dataTexture = new THREE.DataTexture(
      data,
      gridW,
      gridH,
      THREE.RGBAFormat,
      THREE.FloatType,
    );
    dataTexture.magFilter = THREE.NearestFilter;
    dataTexture.minFilter = THREE.NearestFilter;
    dataTexture.needsUpdate = true;

    if (material) {
      material.uniforms.uDataTexture.value = dataTexture;
      material.uniforms.uDataTexture.value.needsUpdate = true;
    }
  }

  function addObjects() {
    regenerateGrid();

    const texture = new THREE.Texture(image);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL1,
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
        uTexture: { value: texture },
        uDataTexture: { value: dataTexture },
        uDisplacement: { value: settings.displacement },
      },
      vertexShader,
      fragmentShader,
    });

    geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
  }

  function resize() {
    width = container.offsetWidth;
    height = container.offsetHeight;

    if (width === 0 || height === 0) return;

    renderer.setSize(width, height);

    const imageAspect = 1 / 1.5;
    let a1;
    let a2;

    if (height / width > imageAspect) {
      a1 = (width / height) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = height / width / imageAspect;
    }

    if (material) {
      material.uniforms.resolution.value.set(width, height, a1, a2);
    }

    regenerateGrid();
  }

  function updateDataTexture() {
    if (!dataTexture) return;

    const data = dataTexture.image.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] *= settings.relaxation;
      data[i + 1] *= settings.relaxation;
    }

    const gridMouseX = size * mouse.x;
    const gridMouseY = size * (1 - mouse.y);
    const maxDist = size * settings.mouse;
    const aspect = height / width;
    const maxDistSq = maxDist ** 2;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const distance =
          ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2;

        if (distance < maxDistSq) {
          const index = 4 * (i + size * j);
          let power = maxDist / Math.sqrt(distance);
          power = clamp(power, 0, 6);

          data[index] += settings.strength * 70 * mouse.vX * power;
          data[index + 1] -= settings.strength * 70 * mouse.vY * power;
        }
      }
    }

    mouse.vX *= 0.82;
    mouse.vY *= 0.82;
    dataTexture.needsUpdate = true;
  }

  function render() {
    if (!isPlaying) return;

    time += 0.05;
    updateDataTexture();

    if (material) {
      material.uniforms.time.value = time;
    }

    renderer.render(scene, camera);
    rafId = window.requestAnimationFrame(render);
  }

  function onMouseMove(event) {
    mouse.x = event.clientX / width;
    mouse.y = event.clientY / height;
    mouse.vX = mouse.x - mouse.prevX;
    mouse.vY = mouse.y - mouse.prevY;
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
  }

  function onTouchMove(event) {
    if (!event.touches.length) return;
    const touch = event.touches[0];
    mouse.x = touch.clientX / width;
    mouse.y = touch.clientY / height;
    mouse.vX = mouse.x - mouse.prevX;
    mouse.vY = mouse.y - mouse.prevY;
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
  }

  addObjects();
  resize();
  render();

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove, { passive: true });

  return {
    destroy() {
      isPlaying = false;

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);

      if (plane) scene.remove(plane);
      geometry?.dispose();
      material?.dispose();
      dataTexture?.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
