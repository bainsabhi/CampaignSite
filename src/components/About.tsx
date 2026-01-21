import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    src: "/Images/cor_omc_mayor_photo-gallery_jan_2026_7.webp",
    alt: "Paul with mayor"
  },
  {
    src: "/Images/cor_omc_paul_photo-gallery_jan-2026_1.jpeg",
    alt: "Paul photo gallery 1"
  },
  {
    src: "/Images/cor_omc_paul_photo-gallery_jan-2026_2.jpg",
    alt: "Paul photo gallery 2"
  },
  {
    src: "/Images/cor_omc_paul_photo-gallery_jan-2026_6.jpg",
    alt: "Paul photo gallery 6"
  },
  {
    src: "/Images/cor_omc_scott_photo_gallery_jan-2026_5.webp",
    alt: "Paul with Scott"
  },
  {
    src: "/Images/sotc-jason-bday.webp",
    alt: "Jason birthday event"
  }
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-[#b11116] text-[#003F72] hover:text-white shadow-lg transition-all duration-300 backdrop-blur-sm"
      aria-label="Next image"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-[#b11116] text-[#003F72] hover:text-white shadow-lg transition-all duration-300 backdrop-blur-sm"
      aria-label="Previous image"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ bottom: "20px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-colors cursor-pointer" />
    )
  };

  return (
    <section id="about" className="py-16 bg-white border-y border-[#003F72]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Gallery Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 h-full min-h-[500px]">
            <Slider {...settings} className="h-full">
              {carouselImages.map((image, index) => (
                <div key={index} className="h-full relative outline-none">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col justify-center py-4">
            <h2 className="text-4xl md:text-5xl text-[#b11116] mb-6 font-black tracking-tight">
              Meet Paul Singh
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-normal">
              With a decade of results as an elected official and 15 years of dedicated service, Paul Singh offers Ward 6 the assurance of experience. His approach combines professional financial expertise with a commitment to putting neighborhoods first.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-normal">
              <strong>Fiscal Stewardship:</strong> Leveraging his background in mortgage services, Paul advocates for a "user-first" approach. He ensures municipal investments directly translate into tangible quality-of-life improvements for residents.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-normal">
              <strong>Leadership:</strong> As Chair of the Planning & Strategic Initiatives Committee, Paul oversees the city’s housing supply. Since his election in 2010, his tenure has been defined by pragmatic, evidence-based governance.
            </p>

            <div className="bg-[#003F72] p-8 md:p-10 relative mt-auto rounded-lg">
              <span className="absolute top-6 left-6 text-6xl md:text-7xl font-black text-[#5C7FA5] leading-none opacity-50 select-none font-serif">
                “
              </span>
              <p className="relative z-10 text-xl md:text-2xl font-black text-white leading-tight tracking-tight pt-6 pb-2 text-center md:text-left">
                I’ll use every tool available to bring down rent, create world-class public transit, and make it easier to raise a family.
              </p>
              <span className="absolute bottom-[-10px] right-6 text-6xl md:text-7xl font-black text-[#5C7FA5] leading-none opacity-50 select-none font-serif rotate-180">
                “
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global override for slick dots to ensure they are visible and styled correctly */}
      <style>{`
        .slick-dots li.slick-active div {
          background-color: #b11116 !important;
          transform: scale(1.2);
        }
        .slick-slider, .slick-list, .slick-track, .slick-slide, .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
