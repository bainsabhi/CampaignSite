import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

type BlogEntry = {
  date: string;
  title: string;
  summary: string[];
  url?: string;
};

type NewsJson = {
  headline: string;
  date: string;
  elements: string[];
};

const PAGE_SIZE = 5;

export function Blog() {
  const [entries, setEntries] = useState<BlogEntry[]>([]);
  const [page, setPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { pagedEntries, totalPages, safePage } = useMemo(() => {
    const totalPagesCalc = Math.max(1, Math.ceil(entries.length / PAGE_SIZE));
    const safePageCalc = Math.min(page, totalPagesCalc);
    const start = (safePageCalc - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return {
      pagedEntries: entries.slice(start, end),
      totalPages: totalPagesCalc,
      safePage: safePageCalc,
    };
  }, [entries, page]);

  const handlePrev = () => {
    setExpandedIndex(null);
    setPage((p) => Math.max(1, p - 1));
  };
  const handleNext = () => {
    setExpandedIndex(null);
    setPage((p) => Math.min(totalPages, p + 1));
  };

  const toggleEntry = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    let cancelled = false;

    const loadBlog = async () => {
      try {
        const response = await fetch("/data/blog.json", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Failed to load blog.json: ${response.status}`);
        }
        const data: NewsJson[] = await response.json();
        const mapped: BlogEntry[] = (Array.isArray(data) ? data : []).map((item) => ({
          date: item.date,
          title: item.headline,
          summary: item.elements ?? [],
        }));
        if (!cancelled) {
          setEntries(mapped);
          setPage(1);
          setExpandedIndex(null);
        }
      } catch {
        if (!cancelled) {
          setEntries([]);
          setPage(1);
          setExpandedIndex(null);
        }
      }
    };

    loadBlog();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="blog" className="pt-14 md:pt-16 pb-24 bg-[#F4F7F9] border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            Blog & Monthly Notes
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal">
            Longer-form updates from Councillor Paul Singh
          </p>
        </div>

        <div className="space-y-6">
          {pagedEntries.map((entry, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <article
                key={entry.title + index}
                className={`bg-white rounded-xl border border-l-4 border-[#003F72] border-l-[#b11116] shadow-[0_8px_24px_rgba(0,0,0,0.05)] ${
                  isExpanded
                    ? 'shadow-xl ring-1 ring-[#003F72]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]'
                    : 'hover:border-[#003F72]/80'
                } ${index === 0 ? 'shadow-[0_12px_28px_rgba(0,0,0,0.08)]' : ''} transition-all overflow-hidden`}
              >
                <div
                  onClick={() => toggleEntry(index)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                        <Calendar size={16} className="text-[#b11116]" />
                        {entry.date}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#003F72] mb-2 leading-tight">
                        {entry.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-gray-600 line-clamp-2">
                          {entry.summary[0]}
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
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-6 pt-0 transition-colors duration-300"
                        style={{ backgroundColor: "rgba(0, 63, 114, 0.25)" }}
                      >
                        <div className="prose prose-blue max-w-none text-gray-700">
                          {entry.summary.map((para, pIdx) => (
                            <p key={pIdx} className="mb-4 last:mb-0 leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                        {entry.url && (
                          <div
                            className="mt-6 pt-4 border-t border-gray-100 w-full flex justify-end gap-2 text-right"
                            style={{ justifyContent: "flex-end" }}
                          >
                            <a 
                              href={entry.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-auto inline-flex items-center text-[#b11116] font-bold hover:text-[#8c0d11] transition-colors text-sm uppercase tracking-wide"
                              style={{ display: "inline-flex" }}
                            >
                              Read Full Column <ExternalLink size={16} className="ml-2" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div
            className="flex items-center justify-center gap-4 mt-10 mb-4"
          >
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="min-w-[120px] px-6 py-2.5 rounded-full border border-[#003F72] text-[#003F72] font-bold hover:bg-[#003F72] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
            >
              Previous
            </button>
            <span className="text-sm font-semibold text-gray-600">
              Page {safePage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="min-w-[120px] px-6 py-2.5 rounded-full border border-[#003F72] text-[#003F72] font-bold hover:bg-[#003F72] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
