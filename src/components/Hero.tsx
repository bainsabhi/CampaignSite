import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, 100]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section id="home" className="relative bg-[#003F72] text-white overflow-hidden min-h-screen flex flex-col items-center pt-6 md:pt-10 pb-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#b11116]/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
         
         {/* Animated Header */}
         <motion.div 
            style={{ y: titleY, opacity: titleOpacity }} 
            className="mb-8 md:mb-12 relative"
         >
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none relative z-10"
               style={{ textShadow: '3px 3px 0px #b11116' }}>
             A Proven Record
           </h1>
           <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2 md:mt-4">
              <span className="font-serif italic text-[#b11116] text-2xl md:text-3xl">for</span>
              <span className="text-2xl md:text-4xl font-bold tracking-wider uppercase">Ward 6</span>
           </div>
         </motion.div>

         {/* Hero Image - Circular Mask */}
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative w-72 h-72 md:w-[400px] md:h-[400px] mb-12 rounded-full overflow-hidden border-8 border-[#003F72] shadow-2xl z-20 bg-gray-200"
         >
            <ImageWithFallback 
               src="/Images/headShotJPG.jpg"
               alt="Paul for Ward 6"
               className="w-full h-full object-cover"
            />
         </motion.div>

         {/* Content Below Image */}
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto space-y-6"
         >
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
               The Work Starts Now.
            </h2>
            <p className="text-lg md:text-2xl text-blue-100/90 leading-relaxed font-medium max-w-3xl mx-auto">
               Paul won with a vision to make Kitchener safe, affordable, and vibrant for all of its residents. 
               Join us in building a community that puts people first.
            </p>
            
            <div className="pt-8">
               <a
                 href="/#get-involved"
                 className="inline-block bg-[#b11116] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#b11116] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
               >
                 Join the Movement
               </a>
            </div>
         </motion.div>

      </div>
    </section>
  );
}
