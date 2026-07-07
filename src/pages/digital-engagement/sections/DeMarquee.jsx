import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "../digitalEngagementData";

function MarqueeRow({ items, direction = "forward" }) {
  const doubled = [...items, ...items];

  return (
    <div className="de-marquee overflow-hidden w-full">
      <div
        className="de-marquee-track inline-flex items-center gap-12 md:gap-[70px] min-w-max will-change-transform"
        data-direction={direction}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`de-marquee-item font-black uppercase tracking-[-0.04em] leading-none text-[clamp(42px,7vw,110px)] ${
              index % 2 === 0
                ? "text-[#0c121c]/12"
                : "text-[#e44f39]/18 hover:text-[#e44f39]/42"
            } transition-colors duration-300`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DeMarquee() {
  return (
    <section className="de-marquee-section relative overflow-hidden bg-[#f4f3f1] py-10 md:py-14">
      <div className="space-y-5">
        <MarqueeRow items={MARQUEE_ROW_1} direction="forward" />
        <MarqueeRow items={MARQUEE_ROW_2} direction="reverse" />
      </div>
    </section>
  );
}
