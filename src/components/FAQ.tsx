import {
  MapPin,
  Users,
  Building2,
  Snowflake,
  AlertCircle,
  Car as CarIcon,
  Home,
  DollarSign,
  FileText,
  Video,
} from "lucide-react";

const faqItems = [
  {
    question: "What can a city councillor actually do for me?",
    icon: Users,
    answer: [
      "I can advocate for you on city-level issues like snow removal, zoning, parks, and road maintenance. I can also introduce motions at Council and help you navigate various City departments to get things done.",
    ],
  },
  {
    question: "Who should I contact for provincial or federal issues?",
    icon: Building2,
    answer: [
      "For healthcare or education matters, reach out to your MPP (Member of Provincial Parliament). For immigration, passports, or employment insurance, contact your MP (Member of Parliament). For garbage collection or regional roads like King Street, contact the Region of Waterloo.",
    ],
  },
  {
    question: "What are the winter parking rules?",
    icon: Snowflake,
    answer: [
      'Between December 1 and March 31, overnight parking is not allowed on city streets so plows can clear the roads. During a declared "Snow Event," all street parking is banned until the streets are cleared.',
    ],
  },
  {
    question: "How do I report a pothole or broken streetlight?",
    icon: AlertCircle,
    answer: [
      "The fastest way is to call the City's 24/7 Corporate Contact Centre at 519-741-2345.",
    ],
  },
  {
    question: "Can I widen my driveway?",
    icon: CarIcon,
    answer: [
      "Most driveway widenings require a permit to make sure they don't interfere with drainage systems or city trees. You can find the specific requirements and application forms on the City's Driveway Permits page.",
    ],
  },
  {
    question: "What is the City doing about affordable housing?",
    icon: Home,
    answer: [
      'While the Region of Waterloo leads housing initiatives, the City of Kitchener provides land, grants, and fast-tracked approvals for developers building affordable units through our "Building Together" strategy.',
    ],
  },
  {
    question: "A new development is proposed near me. How can I have my say?",
    icon: FileText,
    answer: [
      'You can view all active development applications on the City\'s Planning page. I encourage you to attend neighbourhood information sessions or register as a "delegation" to speak directly at a Council meeting about your concerns.',
    ],
    link: {
      text: "View Development Applications",
      url: "https://www.kitchener.ca/development-and-construction/",
    },
  },
  {
    question: "Where do my property taxes go?",
    icon: DollarSign,
    answer: [
      "Your tax bill is divided three ways: roughly 30% goes to the City of Kitchener for services like fire, parks, and community centres; 50% goes to the Region of Waterloo for police, transit, and waste management; and 20% goes to your local school board.",
    ],
  },
  {
    question: "How can I watch Council meetings?",
    icon: Video,
    answer: [
      "All meetings are live-streamed on the City's website and YouTube channel. Agendas are typically posted the Thursday before a Monday meeting, so you can review what's being discussed ahead of time.",
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="pt-14 md:pt-16 pb-24 bg-[#F4F7F9] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal mb-6">
            Common questions about city services, my role as councillor, and how I can help you navigate local government.
          </p>
        </div>

        <div className="divide-y divide-[#003F72]/15">
          {faqItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.question} className="py-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003F72]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#003F72]" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#003F72] mb-2">
                      {item.question}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {item.answer.map((line, index) => (
                        <li key={index} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                    {item.link && (
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-[#b11116] hover:text-[#003F72] font-semibold transition-colors duration-200 underline"
                      >
                        {item.link.text} →
                      </a>
                    )}
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
