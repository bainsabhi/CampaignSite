import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { value: '25,508', label: 'Residents Served in Ward 6' },
  { value: '$204.5M', label: 'External Grants Secured (5-Year Total)' },
  { value: '3,916', label: 'New Housing Units Approved in 2024' },
  { value: '400+', label: 'Capital Projects Funded in the 2026 Budget' },
];

export function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#b11116] tracking-tight uppercase leading-tight">
            The Record in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-[#003F72] tracking-tighter mb-3">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-bold text-[#003F72]/80 uppercase tracking-wide max-w-[200px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full h-64 md:h-96 relative">
        <ImageWithFallback
          src="/Images/CarneyBoi.jpeg"
          alt="Campaign Rally"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003F72]/50 to-transparent mix-blend-multiply" />
      </div>
    </section>
  );
}
