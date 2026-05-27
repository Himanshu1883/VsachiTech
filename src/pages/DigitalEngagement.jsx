import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Scroll from "../components/ui/Scroll";
import usePageTitle from "../components/hooks/usePageTitle";

function ImageSlider() {

  const images = [
    "/digital_engag1.jpg",
    "/digital_engag2.jpg",
    "/digital_engag3.jpg",
    "/digital_engag4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="relative overflow-hidden rounded-[40px] h-[520px] md:h-[700px] shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-white/20">

      {/* IMAGES */}
      {images.map((image, index) => (

        <motion.img
          key={index}
          src={image}
          alt="Digital Engagement"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.08,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">

        <p className="uppercase tracking-[0.3em] text-white/70 text-xs md:text-sm mb-4">
          DIGITAL ENGAGEMENT
        </p>

        <h3 className="text-white text-[34px] md:text-5xl font-black leading-[0.95] tracking-[-0.04em] max-w-md">

          Building brands
          through modern
          digital storytelling.

        </h3>

        <Link
          to="/contact"
          className="inline-flex mt-8 items-center gap-3 px-7 py-4 rounded-full bg-[#e44f39] text-white font-semibold hover:scale-105 hover:bg-[#d9422d] hover:shadow-[0_0_40px_rgba(228,79,57,0.45)] transition-all duration-500 shadow-lg"
        >

          Start Project

          <span className="text-xl">
            →
          </span>

        </Link>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-20">

        {images.map((_, index) => (

          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${currentImage === index
              ? "w-8 bg-white"
              : "w-2 bg-white/40"
              }`}
          />

        ))}

      </div>

    </div>

  );
}

export default function DigitalEngagement() {

  usePageTitle("Digital Engagement");

  const blocks = [
    {
      title: "Creative Storytelling",
      text: "We build engaging visual stories that connect brands with audiences emotionally.",
    },

    {
      title: "Short Form Content",
      text: "High-performing reels, TikToks, YouTube Shorts, and social-first video production.",
    },

    {
      title: "Brand Consistency",
      text: "Unified visual systems across all platforms to strengthen recognition and trust.",
    },

    {
      title: "Growth Strategy",
      text: "Performance-focused content systems designed for engagement and reach.",
    },
  ];

  return (

    <div className="bg-[#f4f3f1] text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] md:min-h-screen flex items-center justify-center overflow-hidden">

        {/* BG IMAGE */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >

          <img
            src="/trend-image.jpg"
            alt="Digital Engagement"
            className="w-full h-full object-cover"
          />

        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#f4f3f1]/75" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
            (HOME - DIGITAL ENGAGEMENT)
          </p>

          <h1 className="text-[42px] sm:text-[56px] md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.92] text-[#0b1320] px-2">

            Build Powerful
            <br />
 
            Digital Engagement
            <br />

            <span className="text-[#e44f39]">
              Experiences
            </span>

          </h1>

          <p className="mt-6 max-w-[95%] md:max-w-3xl mx-auto text-[16px] md:text-lg text-gray-700 leading-[1.9]">

            Social media management, cinematic editing,
            content systems, branding, and audience-focused
            growth strategies designed for modern businesses.

          </p>

        </div>

      </section>

      {/* SCROLL */}
      <div className="py-8 flex justify-center bg-[#f4f3f1]">
        <Scroll />
      </div>

      {/* MARQUEE */}
      <section className="relative overflow-hidden bg-[#f4f3f1] py-8 md:py-12">

        <div className="space-y-4">

          {/* FIRST */}
          <div className="marquee-wrapper">

            <div className="marquee-content">

              <span>VIDEO EDITING</span>
              <span>SHORT FORM CONTENT</span>
              <span>SOCIAL MEDIA</span>
              <span>REELS & SHORTS</span>
              <span>CONTENT CREATION</span>
              <span>BRAND STORYTELLING</span>

              <span>VIDEO EDITING</span>
              <span>SHORT FORM CONTENT</span>
              <span>SOCIAL MEDIA</span>
              <span>REELS & SHORTS</span>
              <span>CONTENT CREATION</span>
              <span>BRAND STORYTELLING</span>

            </div>

          </div>

          {/* SECOND */}
          <div className="marquee-wrapper reverse">

            <div className="marquee-content">

              <span>TRENDING CONTENT</span>
              <span>DIGITAL GROWTH</span>
              <span>AUDIENCE ENGAGEMENT</span>
              <span>CREATIVE STRATEGY</span>
              <span>VISUAL IDENTITY</span>
              <span>CONTENT SYSTEMS</span>

              <span>TRENDING CONTENT</span>
              <span>DIGITAL GROWTH</span>
              <span>AUDIENCE ENGAGEMENT</span>
              <span>CREATIVE STRATEGY</span>
              <span>VISUAL IDENTITY</span>
              <span>CONTENT SYSTEMS</span>

            </div>

          </div>

        </div>

      </section>

      {/* WHY VSACHI TECH */}
      <section className="relative py-24 md:py-32 bg-[#f4f3f1] overflow-hidden">

        {/* BG TEXT */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <h2 className="absolute top-0 left-0 text-[120px] md:text-[240px] font-black text-black/[0.03] whitespace-nowrap leading-none">
            VSACHI TECH • DIGITAL ENGAGEMENT •
          </h2>

          <h2 className="absolute top-[220px] md:top-[280px] right-0 text-[100px] md:text-[220px] font-black text-[#e44f39]/[0.06] whitespace-nowrap leading-none">
            CONTENT CREATION • REELS • SHORTS •
          </h2>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* TOP */}
          <div className="mb-20 flex flex-col gap-6">

            <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
              (WHY VSACHI TECH)
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] max-w-4xl text-[#0b1320] tracking-[-0.04em]">

              Digital experiences
              engineered for modern
              engagement.

            </h2>

            <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">

              We create premium digital experiences through cinematic storytelling,
              social-first content systems, audience engagement strategies,
              and modern creative branding.

            </p>

          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div className="space-y-8">

              {blocks.map((block, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-[32px] p-7 md:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >

                  <div className="flex items-start justify-between gap-6">

                    <div>

                      <h3 className="text-3xl font-black mb-5 text-[#0b1320]">
                        {block.title}
                      </h3>

                      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        {block.text}
                      </p>

                    </div>

                    <div className="w-14 h-14 rounded-full bg-[#e44f39]/10 flex items-center justify-center text-[#e44f39] text-xl font-bold group-hover:scale-110 transition">

                      0{index + 1}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="sticky top-24"
            >

              <ImageSlider />

            </motion.div>

          </div>

        </div>

      </section>

      {/* PROCESS SECTION */}

<section className="relative bg-[#0b0b0b] overflow-hidden py-24 md:py-32">

  {/* GLOW BG */}
  <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#e44f39]/20 blur-[120px] rounded-full" />

  <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-white/[0.04] blur-[140px] rounded-full" />


  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />



  <div className="relative z-10 max-w-7xl mx-auto px-6">


    {/* TOP */}

    <div className="text-center mb-20">

      <p
        className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-gray-400
        mb-6
        "
      >
        (OUR PROCESS)
      </p>


      <h2
        className="
        text-5xl
        md:text-7xl
        font-black
        leading-[0.9]
        tracking-[-0.05em]
        text-white
        "
      >

        How We Build

        <br />

        <span className="text-[#e44f39]">
          Digital Momentum
        </span>

      </h2>

    </div>


    {/* PROCESS CARDS */}

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          number:"01",
          title:"Research",
          text:"Understanding audience behaviour, trends, and platform psychology.",
          image:"/marketing_research.jpg",
        },

        {
          number:"02",
          title:"Strategy",
          text:"Building scalable engagement systems aligned with brand goals.",
          image:"/marketing_strategy.jpg",
        },

        {
          number:"03",
          title:"Create",
          text:"Producing cinematic edits, visuals, reels, and premium assets.",
          image:"/marketing_create.jpg",
        },

        {
          number:"04",
          title:"Scale",
          text:"Optimizing content performance and audience retention consistently.",
          image:"/marketing_scale.jpg",
        }

      ].map((item,index)=>(

        <div
          key={index}
          className="
          group
          relative
          overflow-hidden
          rounded-[36px]
          min-h-[340px]
          border
          border-white/10

          hover:-translate-y-2
          hover:scale-[1.02]

          transition-all
          duration-500
          "
        >


          {/* BACKGROUND IMAGE */}

          <div className="absolute inset-0 overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="
              w-full
              h-full
              object-cover
              object-center

              brightness-[1]
              contrast-[1.05]

              transition-transform
              duration-[2500ms]

              group-hover:scale-110
              "
            />

          </div>


          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/65" />


          {/* GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />


          {/* CONTENT */}

          <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">


            {/* NUMBER */}

            <div className="absolute top-8 left-8 text-7xl md:text-8xl font-black text-white/10">

              {item.number}

            </div>


            {/* TITLE */}

            <h3 className="text-3xl md:text-4xl font-black mb-5 text-white">

              {item.title}

            </h3>


            {/* TEXT */}

            <p className="text-gray-300 leading-[1.8] text-lg">

              {item.text}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* INSIGHT SECTION */}

<section className="bg-[#f7f7f5] py-28 px-6 overflow-hidden">
  

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-sm text-[#e44f39] mb-5">
        ( WHY DIGITAL EXPERIENCE MATTERS )
      </p>

      <h2 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#0f172a]">

        Building more than
        <br/>

        <span className="text-[#e44f39]">
          content.
        </span>

      </h2>

      <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">

        We combine strategy, storytelling and technology
        to turn attention into long-term audience growth.

      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          number:"120+",
          title:"Projects Delivered",
          desc:"Creating high-performing content systems."
        },

        {
          number:"95%",
          title:"Audience Retention",
          desc:"Designed for engagement and conversion."
        },

        {
          number:"24/7",
          title:"Creative Support",
          desc:"Continuous optimization and strategy."
        }

      ].map((item,index)=>(

        <motion.div
        key={index}
        whileHover={{
          y:-10,
          scale:1.03
        }}
        className="bg-white rounded-[35px] p-10 shadow-sm border border-gray-100"
        >

          <h3 className="text-5xl font-black text-[#e44f39] mb-5">

            {item.number}

          </h3>

          <h4 className="text-2xl font-bold text-[#111] mb-4">

            {item.title}

          </h4>

          <p className="text-gray-600">

            {item.desc}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>



      {/* DARK SECTION */}
<section className="relative overflow-hidden min-h-screen flex items-center justify-center">

  {/* BACKGROUND IMAGE */}
  <motion.div
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0"
  >
    <img
      src="/sbg1.jpg"
      alt="Digital Engagement"
      className="w-full h-full object-cover object-center"
    />
  </motion.div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/75" />

  {/* EXTRA GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

  {/* GLOW EFFECT */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e44f39]/20 blur-[160px] rounded-full" />

  {/* CONTENT */}
  <div className="relative z-10 w-full px-6 sm:px-8 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              mb-8
            "
          >
            <div className="w-2 h-2 rounded-full bg-[#e44f39]" />

            <span
              className="
                uppercase
                tracking-[0.24em]
                text-[11px]
                sm:text-xs
                text-gray-200
                font-medium
              "
            >
              Digital Engagement Engine
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              font-black
              text-white
              leading-[0.88]
              tracking-[-0.06em]

              text-[42px]
              sm:text-[60px]
              md:text-[82px]
              lg:text-[96px]

              max-w-5xl
            "
          >
            We build

            <span className="block text-[#e44f39]">
              attention
            </span>

            that transforms into

            <span className="block">
              growth & influence.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="
              mt-8
              text-gray-300
              leading-[1.9]

              text-[16px]
              sm:text-[18px]
              md:text-[20px]

              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
            We craft modern digital experiences through
            strategic content, cinematic editing, visual storytelling,
            and performance-driven social media systems designed
            to scale your brand online.
          </motion.p>


        </div>

        {/* RIGHT SIDE CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.1 }}
          className="relative"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              sm:p-10
            "
          >
            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e44f39]/20 via-transparent to-transparent" />

            <div className="relative z-10">

              {/* SMALL TITLE */}
              <p
                className="
                  uppercase
                  tracking-[0.22em]
                  text-[11px]
                  text-gray-400
                  mb-6
                "
              >
                What We Deliver
              </p>

              {/* SERVICES */}
              <div className="space-y-5">
                {[
                  "High-impact social media campaigns",
                  "Cinematic brand storytelling",
                  "Performance-focused content systems",
                  "Short-form video editing & strategy",
                  "Creative direction for modern brands",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-4
                      border-b
                      border-white/10
                      pb-5
                    "
                  >
                    <div
                      className="
                        mt-1
                        w-3
                        h-3
                        rounded-full
                        bg-[#e44f39]
                        shadow-[0_0_20px_rgba(228,79,57,0.7)]
                      "
                    />

                    <p
                      className="
                        text-white/90
                        text-[15px]
                        sm:text-[17px]
                        leading-relaxed
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              


              {/* BOTTOM CTA */}
              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                "
              >
                <p className="text-gray-400 text-sm">
                  Helping brands create meaningful digital presence
                  through strategic creativity and scalable content systems.
                </p>

                <div className="mt-5">
                  <p className="text-white text-sm">
                    Trusted by fast-growing brands worldwide
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>

</section>

{/* ================= MINI CTA ================= */}

<motion.section
  initial={{ opacity:0,y:20 }}
  whileInView={{ opacity:1,y:0 }}
  transition={{ duration:0.6 }}
  viewport={{ once:true }}
  className="
  relative
  py-12
  md:py-16
  bg-[#f1efeb]
  overflow-hidden
  "
>




{/* Large rotating ribbon */}

<motion.div
animate={{
rotate:[0,360]
}}
transition={{
duration:40,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
top-[-250px]
right-[-250px]

w-[700px]
h-[700px]

rounded-full
border-[30px]
border-[#de6b58]/10
"
/>


{/* Second opposite ribbon */}

<motion.div
animate={{
rotate:[360,0]
}}
transition={{
duration:30,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
bottom-[-300px]
left-[-250px]

w-[600px]
h-[600px]

rounded-full
border-[24px]
border-[#de6b58]/8
"
/>


{/* Floating glass pill */}

<motion.div
animate={{
y:[0,-25,0],
rotate:[0,5,0]
}}
transition={{
duration:8,
repeat:Infinity
}}
className="
absolute
top-[20%]
left-[12%]

w-[140px]
h-[60px]

rounded-full

bg-white/30
backdrop-blur-xl
border
border-white/50

shadow-xl
"
/>


{/* Floating pill 2 */}

<motion.div
animate={{
y:[0,30,0],
rotate:[0,-8,0]
}}
transition={{
duration:10,
repeat:Infinity
}}
className="
absolute
bottom-[18%]
right-[10%]

w-[180px]
h-[70px]

rounded-full

bg-[#de6b58]/20
backdrop-blur-xl

border
border-white/30
"
/>


{/* Orbital element */}

<motion.div
animate={{
rotate:360
}}
transition={{
duration:18,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
top-[50%]
left-[50%]

w-[400px]
h-[400px]

-translate-x-1/2
-translate-y-1/2
"
>

<div
className="
absolute
top-0
left-1/2
w-6
h-6
rounded-full
bg-[#de6b58]
shadow-[0_0_30px_rgba(222,107,88,.7)]
"
/>

</motion.div>


{/* Soft moving depth blur */}

<motion.div
animate={{
scale:[1,1.15,1],
x:[0,50,0]
}}
transition={{
duration:15,
repeat:Infinity
}}
className="
absolute
top-[35%]
left-[35%]

w-[300px]
h-[300px]

rounded-full
bg-[#de6b58]/15
blur-[100px]
"
/>
<div
className="absolute inset-0 opacity-[0.06]"
style={{
backgroundImage:`
radial-gradient(#de6b58 1px, transparent 1px)
`,
backgroundSize:"40px 40px"
}}
/>


{/* MOVING LIGHT STREAKS */}

<motion.div
animate={{
x:["0%","-50%"]
}}
transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
top-0
left-0
w-[200%]
h-full
opacity-[0.04]
bg-[repeating-linear-gradient(135deg,transparent,transparent_80px,#de6b58_80px,#de6b58_82px)]
"
/>


{/* BIG BLUR GLOW LEFT */}

<motion.div
animate={{
x:[0,40,0],
y:[0,-30,0]
}}
transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
top-[-100px]
left-[-80px]
w-[350px]
h-[350px]
rounded-full
bg-[#de6b58]/10
blur-[120px]
"
/>


{/* BIG BLUR GLOW RIGHT */}

<motion.div
animate={{
x:[0,-30,0],
y:[0,30,0]
}}
transition={{
duration:15,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
bottom-[-120px]
right-[-80px]
w-[350px]
h-[350px]
rounded-full
bg-[#de6b58]/10
blur-[130px]
"
/>


{/* FLOATING PARTICLES */}

{[...Array(18)].map((_,i)=>(

<motion.div
key={i}

animate={{
y:[0,-25,0],
opacity:[0.2,1,0.2]
}}

transition={{
duration:3+i/2,
repeat:Infinity
}}

className="
absolute
w-[4px]
h-[4px]
rounded-full
bg-[#de6b58]/40
"

style={{
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`
}}

/>

))}




{/* GRID */}

<div
className="absolute inset-0 opacity-[0.025]"
style={{
backgroundImage:`
linear-gradient(rgba(0,0,0,.6) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px)
`,
backgroundSize:"60px 60px"
}}
/>


{/* SOFT MOVING GLOW */}

<motion.div
animate={{
x:[0,30,0],
y:[0,-20,0]
}}
transition={{
duration:10,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
top-[-80px]
left-[20%]
w-[280px]
h-[280px]
rounded-full
bg-[#de6b58]/10
blur-[100px]
"
/>

<div className="max-w-5xl mx-auto px-6 relative z-10">

<div className="text-center">

<p
className="
uppercase
tracking-[0.3em]
text-[#de6b58]
text-[10px]
font-medium
mb-3
"
>

( LET'S BUILD SOMETHING GREAT )

</p>


<h2
className="
font-black
leading-[1]
tracking-[-0.05em]

text-[#111]

text-[28px]
sm:text-[38px]
md:text-[52px]
"
>

Ready to grow your 

<span className="text-[#de6b58] pl-2 ">
 digital presence?
</span>

</h2>


<p
className="
mt-4
text-gray-500
text-sm
md:text-base
max-w-xl
mx-auto
leading-[1.7]
"
>

Creative content, storytelling and digital experiences designed to help your brand stand out.

</p>


{/* MINI TAGS */}

<div
className="
flex
justify-center
flex-wrap
gap-3
mt-6
"
>

{[
"Social Growth",
"Content",
"Strategy"
].map((tag,index)=>(

<motion.div
key={index}
animate={{
y:[0,-4,0]
}}
transition={{
duration:2+index,
repeat:Infinity
}}
className="
px-4
py-2
rounded-full
bg-white/60
backdrop-blur-md
border
border-white
text-[12px]
text-[#444]
"
>

{tag}

</motion.div>

))}

</div>


<div
className="
mt-8
flex
justify-center
gap-4
flex-wrap
"
>

{/* Start Project */}

<Link
to="/contact"
className="
inline-flex
items-center
px-7
py-3
rounded-full
bg-[#de6b58]
text-white
font-medium
text-sm
hover:scale-105
transition-all
duration-500
shadow-lg
"
>

Start Project →

</Link>


{/* View Portfolio */}

<Link
to="/our-work"
className="
inline-flex
items-center
px-7
py-3
rounded-full
bg-white
text-[#111]
font-medium
text-sm
border
border-gray-200
hover:scale-105
hover:shadow-lg
transition-all
duration-500
"
>

View Portfolio →

</Link>

</div>

</div>

</div>

</motion.section>

{/* ================= END MINI CTA ================= */}



      {/* STYLES */}
      <style>{`

      .marquee-wrapper {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        position: relative;
      }

      .marquee-content {
        display: inline-flex;
        align-items: center;
        gap: 70px;
        min-width: max-content;
        animation: marquee 32s linear infinite;
      }

      .reverse .marquee-content {
        animation-direction: reverse;
      }

      .marquee-content span {
        font-weight: 900;
        letter-spacing: -0.04em;
        text-transform: uppercase;
        line-height: 1;
        font-size: clamp(42px, 7vw, 110px);
        color: rgba(12, 18, 28, 0.12);
        transition: all 0.4s ease;
      }

      .marquee-content span:nth-child(2n) {
        color: rgba(228, 79, 57, 0.18);
      }

      .marquee-content span:hover {
        color: rgba(228, 79, 57, 0.42);
        transform: translateY(-3px);
      }

      @keyframes marquee {
        from {
          transform: translateX(0%);
        }

        to {
          transform: translateX(-50%);
        }
      }

      `}</style>

    </div>

  );
}