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
        content: 'Championing a streamlined planning process that achieved 95% of provincial housing targets and approved nearly 4,000 new units.',
      },
      {
        title: 'Expanding Diverse Options',
        content: 'Updating the Official Plan to prioritize the "missing middle," resulting in the creation of 594 duplex units and new inclusionary zoning for affordable units.',
      },
    ],
  },
  {
    category: 'Safety',
    items: [
      {
        title: 'Implementing Vision Zero',
        content: 'Leading a data-driven strategy to eliminate traffic-related fatalities through high-risk "hot spot" interventions and geometric roadway changes.',
      },
      {
        title: 'Neighborhood Traffic Calming',
        content: 'Empowering Ward 6 residents to lead safety projects like painted crosswalks and advocating for regional photo radar in school zones.',
      },
    ],
  },
  {
    category: 'Affordability',
    items: [
      {
        title: 'Aggressive Grant Acquisition',
        content: 'Reducing the property tax burden by securing over $204.5 million in external funding for infrastructure and climate projects.',
      },
      {
        title: 'Disciplined Fiscal Management',
        content: 'Maintaining property tax rate increases at or below inflation levels while funding 50 core municipal services.',
      },
    ],
  },
  {
    category: 'Parks & Recreation',
    items: [
      {
        title: 'Transforming McLennan Park',
        content: 'Advocating for the continuous upgrade of trails, playgrounds, and community hubs at this cornerstone regional recreation site.',
      },
      {
        title: 'Building Community Hubs',
        content: 'Securing essential local amenities including outdoor rinks, community gardens, and the annual "Cinema Under the Stars" event.',
      },
    ],
  },
  {
    category: 'Public Transport',
    items: [
      {
        title: 'Regional Connectivity',
        content: 'Partnering with provincial and federal leaders to secure investment for the King Victoria Transit Hub and Kitchener-to-Toronto GO Train service.',
      },
      {
        title: 'Sustainable Mobility',
        content: 'Expanding the city-wide Cycling and Trails Master Plan with a pilot for asphalted and winter-maintained trails.',
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
