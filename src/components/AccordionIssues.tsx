import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItem {
  title: string;
  content: string;
}

interface Section {
  category: string;
  items: AccordionItem[];
}

const sections: Section[] = [
  {
    category: 'Housing',
    items: [
      {
        title: 'Advancing "Housing For All"',
        content: 'Councillor Paul has emphasized that Kitchener is facing a supply crisis, stating, "We need to create increased inventory at the fastest pace available." He has consistently voted to streamline approvals to meet provincial targets, noting that while affordability is critical, the immediate priority must be treating this as a "housing problem specifically" to unlock supply.',
      },
      {
        title: 'Expanding Diverse Options',
        content: 'As Chair of the Planning & Strategic Initiatives Committee, Paul championed the Missing Middle and Affordable Housing Community Improvement Plan, describing it as a tool to "accelerate the creation of new housing, especially the missing middle and affordable units our residents need most." This initiative specifically targets the creation of family-sized homes near transit and diverse options for seniors and young adults.',
      },
    ],
  },
  {
    category: 'Safety',
    items: [
      {
        title: 'Implementing Vision Zero',
        content: 'Paul has been a vocal proponent of "concrete actions" over theoretical plans, supporting the use of technology like speed cameras to enforce safety while remaining mindful of costs. He noted, "These are the sort of items that our residents will see and we should be proud of the work that we\'re doing here because this will reduce the incidence of injury."',
      },
      {
        title: 'Neighborhood Traffic Calming',
        content: 'Recognizing that safety concerns vary by street, Paul has advocated for empowering residents to identify local risks, stating that "Vision Zero is very important work" that requires tangible infrastructure changes. He has supported lowering speed limits in residential neighborhoods to create a "people-friendly transportation" network where families feel safe walking and cycling.',
      },
    ],
  },
  {
    category: 'Affordability',
    items: [
      {
        title: 'Aggressive Grant Acquisition',
        content: 'Leveraging his financial background in the mortgage industry, Paul understands the "diverse financial pressures the average family may experience" and has pushed for securing external funding to offset costs. He has argued that suppressing necessary utility improvements would only defer costs, noting that failing to invest now would "ultimately [have] an impact on the ratepayer" later.',
      },
      {
        title: 'Disciplined Fiscal Management',
        content: 'Paul brings an entrepreneurial approach to the city budget, focusing on the "balance required between investing in growth, while curtailing costs" to keep property tax increases manageable. He has consistently advocated for "sub-inflationary" tax increases where possible, ensuring that core services like fire suppression and snow clearing remain fully funded without overburdening homeowners.',
      },
    ],
  },
  {
    category: 'Parks & Recreation',
    items: [
      {
        title: 'Transforming McLennan Park',
        content: 'Addressing long-standing concerns about park amenities, Paul frankly acknowledged the issues with facilities, stating, "I know the status of the washrooms at McLennan Park has been a concern for many." He recently secured a washroom trailer as an interim solution for the 2026 season, promising, "I am committed to ensuring these interim measures at McLennan Park meet your needs while we build for the future."',
      },
      {
        title: 'Building Community Hubs',
        content: 'Paul views shared spaces as vital for neighborhood cohesion, highlighting the "many wins" of initiatives like Neighbour\'s Day that are driven by resident "leg work." He is actively overseeing future-focused projects, such as the new splash pad at Lions Park, noting, "We are looking ahead to the future of this vital green space," with a target opening for Summer 2027.',
      },
    ],
  },
  {
    category: 'Public Transport',
    items: [
      {
        title: 'Regional Connectivity',
        content: 'Paul sees active transportation as the critical link to broader regional transit, supporting new wayfinding signage to help residents "navigate our network more easily, connecting you to schools, parks, and transit." He continues to advocate for reliable connections to the Kitchener-to-Toronto GO line, viewing it as essential for the economic prosperity of Ward 6 residents.',
      },
      {
        title: 'Sustainable Mobility',
        content: 'Championing practical improvements for cyclists and pedestrians, Paul led a pilot in Ward 6 for asphalted and winter-maintained trails. He successfully pushed for this standard to be included in the city-wide Cycling and Trails Master Plan, ensuring that active transportation remains a viable year-round option for commuters and families alike.',
      },
    ],
  },
];

export function AccordionIssues() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="issues" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, sectionIndex) => (
          <div key={section.category} className="mb-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-300 px-6 py-6">
                <h2 className="text-3xl md:text-4xl font-black text-[#b11116] tracking-tight">
                  {section.category}
                </h2>
              </div>
              
              {/* Accordion Items */}
              <div className="bg-white divide-y divide-gray-200">
                {section.items.map((item, itemIndex) => {
                  const itemKey = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openItems.has(itemKey);
                  
                  return (
                    <div key={itemKey}>
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className={`w-full px-6 py-3 flex items-center justify-between text-left transition-all duration-300 ${
                          isOpen ? 'bg-[#003F72]' : 'bg-white hover:bg-gray-50'
                        }`}
                      >
                        <span className={`text-lg md:text-xl font-semibold pr-4 transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-[#003F72]'
                        }`}>
                          {item.title}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            isOpen ? 'bg-[#b11116]' : 'bg-[#003F72]'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="text-white" size={18} strokeWidth={3} />
                          ) : (
                            <Plus className="text-white" size={18} strokeWidth={3} />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-6 bg-white border-t border-gray-200">
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line font-normal">
                                {item.content}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
