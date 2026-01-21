import {
  Calendar,
  TrendingUp,
  Wallet,
  Wrench,
  Leaf,
  Landmark,
  Sparkles,
} from "lucide-react";

const budgetHighlights = [
  {
    title: "Property tax vs. inflation",
    icon: TrendingUp,
    stat: "2.2% property tax increase matches Ontario’s two‑year inflation average (2.2%).",
    text:
      "The City uses the two‑year inflation average as a benchmark for affordability and sets the 2026 increase in line with that figure.",
  },
  {
    title: "Average household impact",
    icon: Wallet,
    stat: "$117 total annual increase for the average household.",
    text:
      "Based on a $326,000 assessed value and 170 m³ annual water consumption; this includes property tax, water, sanitary sewer, and stormwater rates.",
  },
  {
    title: "Lowest in the region",
    icon: Landmark,
    stat: "2026 increase is expected to be the lowest rate increase in Waterloo Region.",
    text:
      "Council approved the budget with a focus on affordability while maintaining core services and growth‑related needs.",
  },
  {
    title: "City assets protected",
    icon: Wrench,
    stat: "$15B in City assets supported through infrastructure investment.",
    text:
      "Assets include roads, bridges, water, wastewater, stormwater, facilities, parks, open spaces and forestry.",
  },
  {
    title: "Capital plan momentum",
    icon: Sparkles,
    stat: "$1.8B over 10 years, with $201M in the first year.",
    text:
      "The capital plan focuses on long‑term renewal and growth to keep the city’s infrastructure reliable.",
  },
];

const priorityItems = [
  {
    title: "Affordable city services",
    icon: TrendingUp,
    text:
      "The 2026 budget keeps the tax increase aligned with Ontario’s two‑year inflation average while maintaining core services.",
  },
  {
    title: "Smart infrastructure investments",
    icon: Wrench,
    text:
      "Investments maintain and improve transportation infrastructure, utilities, parks, and facilities across the city.",
  },
  {
    title: "Focusing on the future",
    icon: Leaf,
    text:
      "Funding includes $1.7M for community trails, $1.5M for neighbourhood parks, $5M for local arts & culture, $150K for RISE grants, and $2.6M to modernize core business and technology systems.",
  },
];

export function Budget() {
  return (
    <section id="budget" className="pt-14 md:pt-16 pb-24 bg-[#F4F7F9] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            2026 Budget
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal mb-6">
            A concise overview of the City of Kitchener’s 2026 budget: impacts and priorities.
          </p>
          <div className="mt-6 mb-10 flex justify-center">
            <a
              href="https://www.kitchener.ca/media/2mxbmlay/cok_fin_budget_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap bg-[#b11116] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#b11116] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Official 2026 Budget</span>
            </a>
          </div>
        </div>

        <div className="divide-y divide-[#003F72]/15 bg-white rounded-xl border border-[#003F72] shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          {budgetHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003F72]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#003F72]" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-[#003F72] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-[#003F72] mb-2">
                      {item.stat}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {priorityItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003F72]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#003F72]" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-[#003F72] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
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
