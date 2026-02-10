import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, ExternalLink, Calendar } from 'lucide-react';

type NewsItem = {
  url: string;
  date: string;
  title: string;
  content: string[];
};

export function News() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadNews = async () => {
      try {
        const response = await fetch('/data/news.json', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`Failed to load news.json: ${response.status}`);
        }
        const data = await response.json();
        const items = Array.isArray(data) ? data : [];
        if (!cancelled) {
          setNewsItems(items);
          setExpandedIndex(null);
        }
      } catch {
        if (!cancelled) {
          setNewsItems([]);
          setExpandedIndex(null);
        }
      }
    };

    loadNews();

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleNews = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="news" className="pt-14 md:pt-16 pb-24 bg-[#F4F7F9] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            Latest News
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal">
            Stay updated with the latest announcements, press releases, and community stories from Paul Singh.
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                className={`bg-white rounded-xl border border-l-4 border-[#003F72] border-l-[#b11116] shadow-[0_8px_24px_rgba(0,0,0,0.05)] ${
                  isExpanded
                    ? 'shadow-xl ring-1 ring-[#003F72]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]'
                    : 'hover:border-[#003F72]/80'
                } ${index === 0 ? 'shadow-[0_12px_28px_rgba(0,0,0,0.08)]' : ''} transition-all overflow-hidden`}
              >
                <div 
                  onClick={() => toggleNews(index)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                        <Calendar size={16} className="text-[#b11116]" />
                        {item.date}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#003F72] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      {/* Show first paragraph as summary if not expanded */}
                      {!isExpanded && (
                        <p className="text-gray-600 line-clamp-2">
                          {item.content[0]}
                        </p>
                      )}
                    </div>
                    <div className="mt-1">
                      {isExpanded ? (
                        <ChevronUp className="text-[#003F72]" />
                      ) : (
                        <ChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-6 pt-0 transition-colors duration-300"
                        style={isExpanded ? { backgroundColor: 'rgba(0, 63, 114, 0.25)' } : undefined}
                      >
                        <div className="prose prose-blue max-w-none text-gray-700">
                          {item.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-4 last:mb-0 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <div
                          className="mt-6 pt-4 border-t border-gray-100 w-full flex justify-end gap-2 text-right"
                          style={{ justifyContent: "flex-end" }}
                        >
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center text-[#b11116] font-bold hover:text-[#8c0d11] transition-colors text-sm uppercase tracking-wide"
                            style={{ display: "inline-flex" }}
                          >
                            Read Full Article <ExternalLink size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
