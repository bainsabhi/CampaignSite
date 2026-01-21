import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const quotes = [
  { topic: "Community", text: "I want to connect with long-time residents who feel disenfranchised; they have so much to offer." },
  { topic: "Quotes from Paul Singh", text: "We are moving away from 'port-a-potties' at McLennan Park to provide more dignified facilities for families." },
  { topic: "Autonomy", text: "The autonomy of the local municipal voice is vital; we cannot have economic zones imposed without local input." },
  { topic: "Reconciliation", text: "We cannot have empty gestures for reconciliation; all Indigenous voices must be at the table." },
  { topic: "Governance", text: "Appointing election runners-up is the right course to respect the thousands of votes cast by our residents." },
  { topic: "Public Health", text: "A targeted approach in high-transmission areas is the strategy that should have been applied from the start." },
  { topic: "Economy", text: "As an entrepreneur, I understand the balance between investing in growth and curtailing costs." },
  { topic: "Vision", text: "I advocate for an inclusive, safe, and environmentally friendly Kitchener where affordability is not an issue." },
];

const SEPARATOR = "\u00A0\u00A0\u2022\u00A0\u00A0";

export function QuoteMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const setMarqueeHeight = () => {
      const height = Math.ceil(marqueeEl.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--quote-marquee-height", `${height}px`);
    };

    setMarqueeHeight();

    const resizeObserver = new ResizeObserver(setMarqueeHeight);
    resizeObserver.observe(marqueeEl);
    window.addEventListener("resize", setMarqueeHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setMarqueeHeight);
    };
  }, []);

  return (
    <>
      {/* Sticky ticker pinned to top of viewport */}
      <div
        ref={marqueeRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#003F72] py-2 md:py-2.5 border-b border-white/10 shadow-md"
      >
        <Marquee speed={35} gradient={false} autoFill>
          {quotes.map((quote, index) => (
            <span key={index} className="mx-0 text-sm md:text-base tracking-wide">
              <span
                className="font-bold text-white uppercase"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {quote.topic}:
              </span>
              <span
                className="ml-1.5 font-medium text-white"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                "{quote.text}"
              </span>
              <span className="text-white/40">{SEPARATOR}</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Spacer so page content isn't hidden behind the fixed ticker */}
      <div aria-hidden="true" style={{ height: "var(--quote-marquee-height, 44px)" }} />
    </>
  );
}
