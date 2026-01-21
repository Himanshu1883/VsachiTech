export default function MovingTextSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">

      {/* FIRST LINE */}
      <div className="overflow-hidden tracking-tighter">
        <div className="marquee-track marquee-left tracking-tighter">
          <div className="marquee-content tracking-tighter">
            <span className="block">WEB DESIGN</span>
            <span className="block font-bold">UI/UX</span>
            <span className="block">MOBILE</span>
            <span className="block font-bold">UI/UX</span>
            <span className="block">BRANDING</span>
            <span className="block">MOBILE</span>

          </div>

          {/* DUPLICATE */}
          <div className="marquee-content tracking-tighter">
            <span className="block">WEB DESIGN</span>
            <span className="block font-bold">UI/UX</span>
            <span className="block">MOBILE</span>
            <span className="block font-bold">UI/UX</span>
            <span className="block">BRANDING</span>
            <span className="block">MOBILE</span>

          </div>
        </div>
      </div>

      <div className="-mt-[18px]" />

      {/* SECOND LINE */}
      <div className="overflow-hidden tracking-tighter">
        <div className="marquee-track marquee-right tracking-tighter">
          <div className="marquee-content alt tracking-tighter">
            <span className="block text-red-500">WEB</span>
            <span className="block text-black font-bold">SEO</span>
            <span className="block text-red-500">CONTENT</span>
            <span className="block text-black font-bold">ECOMMERCE</span>
          </div>

          {/* DUPLICATE */}
          <div className="marquee-content alt tracking-tighter">
            <span className="block text-red-500">{"\u00A0"} WEB</span>
            <span className="block text-black font-bold">SEO</span>
            <span className="block text-red-500">MARKETING</span>
            <span className="block text-black font-bold">ECOMMERCE</span>
          </div>
        </div>
      </div>

    </section>
  );
}
