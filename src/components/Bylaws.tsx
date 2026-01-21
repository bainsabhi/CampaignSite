import {
  Phone,
  Volume2,
  Flame,
  MapPin,
  Fence,
  Car,
  Home,
  Droplet,
  Sparkles,
  FileText,
} from "lucide-react";

const infoBlocks = [
  {
    title: "Report a problem",
    icon: Phone,
    text: [
      "Call the City of Kitchener at 519-741-2345 to report a bylaw issue or problem.",
      "For noise or fireworks complaints, call the Waterloo Regional Police Service (WRPS) non-emergency line at 519-570-9777."
    ],
  },
  {
    title: "Noise",
    icon: Volume2,
    text: [
      "Noise bylaws are in effect 24/7 and cover excessive noise like yelling, loud music, or other unusual noise.",
      "Construction noise is permitted between 7 a.m. and 7 p.m., seven days a week."
    ],
  },
  {
    title: "Fireworks",
    icon: Sparkles,
    text: [
      "Permitted only on Victoria Day (9-11 p.m.), Canada Day (9-11 p.m.), and Diwali (8-10 p.m.).",
      "A permit is required for any other day or time, and fireworks cannot be set off on public property.",
      "Do not set off fireworks in streets, woodlots, public trails or parks, or within 10 metres of a building or structure; always have an adult present and water handy.",
      "Firecrackers (including cherry bombs and torpedoes) cannot be sold or set off in Kitchener; firework sales are banned starting in 2026."
    ],
  },
  {
    title: "Zoning",
    icon: MapPin,
    text: [
      "Kitchener has two zoning bylaws: 85-1 and 2019-051 (approved and under appeal).",
      "Zoning rules determine land use, building types, heights, setbacks, and parking requirements."
    ],
  },
  {
    title: "Fence bylaw",
    icon: Fence,
    text: [
      "If your fence doesn’t meet bylaw requirements, you can apply for a variance."
    ],
  },
  {
    title: "Idling",
    icon: Car,
    text: [
      "Vehicles must be turned off after three consecutive minutes of idling, unless in traffic.",
      "The bylaw doesn’t apply when the temperature is above 27°C or below 5°C."
    ],
  },
  {
    title: "Property standards",
    icon: Home,
    text: [
      "Standards cover safe, well-maintained structures, heating/plumbing systems, ventilation, and potable water."
    ],
  },
  {
    title: "Lawn watering",
    icon: Droplet,
    text: [
      "The Region of Waterloo water conservation bylaw runs May 31 to Sept 30.",
      "Lawn watering is limited to once per week, based on your address."
    ],
  },
  {
    title: "Backyard fires",
    icon: Flame,
    text: [
      "On private property, fires are allowed between 6 and 11 p.m. in a fire pit, outdoor fireplace, or backyard chiminea.",
      "Fires must be fully contained, no larger than 1 metre in any direction, and keep flammable ground cover at least 1 metre away.",
      "Fires must be at least 5 metres from property lines or fences, buildings, trees, roads, overhead wires, and other flammable items.",
      "Only burn bush material (tree limbs, branches, bush trimmings) or logs made for fireplaces; keep a hose or extinguisher nearby and have an adult supervise."
    ],
  },
];

export function Bylaws() {
  return (
    <section id="bylaws" className="pt-14 md:pt-16 pb-24 bg-[#F4F7F9] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            Bylaw Guide
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal mb-6">
            A quick, plain‑language overview of common bylaws and how to report issues in Kitchener.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.kitchener.ca/bylaws-and-enforcement/bylaw-guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap bg-[#b11116] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#b11116] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Official Bylaw Guide</span>
            </a>
          </div>
        </div>

        <div className="divide-y divide-[#003F72]/15">
          {infoBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="py-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003F72]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#003F72]" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#003F72] mb-2">
                      {block.title}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {block.text.map((line, index) => (
                        <li key={index} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
