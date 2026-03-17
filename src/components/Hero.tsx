import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, 100]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col items-center pt-8 md:pt-12 pb-24 text-white" style={{ backgroundColor: "var(--campaign-primary)" }}>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px]" style={{ backgroundColor: "color-mix(in oklab, var(--campaign-primary) 30%, white)" }} />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px]" style={{ backgroundColor: "color-mix(in oklab, var(--campaign-accent) 26%, transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
         
         {/* Animated Header */}
         <motion.div 
            style={{ y: titleY, opacity: titleOpacity }} 
            className="mb-8 md:mb-12 relative"
         >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none relative z-10"
                style={{ color: '#fff', textShadow: '3px 3px 0px var(--campaign-accent)', letterSpacing: 'var(--campaign-tracking-display)' }}>
              A Proven Record
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2 md:mt-4">
               <span className="font-serif italic text-2xl md:text-3xl" style={{ color: '#fff' }}>for</span>
               <span className="text-2xl md:text-4xl font-bold tracking-wider uppercase" style={{ color: '#fff' }}>Ward 6</span>
            </div>
         </motion.div>

         {/* Hero Image - Circular Mask */}
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-72 h-72 md:w-[400px] md:h-[400px] mb-12 rounded-full overflow-hidden border-8 shadow-2xl z-20 bg-gray-200"
            style={{ borderColor: "var(--campaign-primary)" }}
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
             <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight" style={{ color: '#fff', letterSpacing: 'var(--campaign-tracking-display)' }}>
                Built in Kitchener. Focused on Ward 6.
             </h2>
             <p className="text-lg md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto" style={{ color: '#fff' }}>
                From Laurentian to Country Hills, let’s keep KW safe, affordable, and full of opportunity for every family.
             </p>
            
            <div className="pt-8">
                <a href="/#get-involved" className="campaign-btn-primary text-base md:text-lg px-8 py-3.5">
                  Join the Movement
                </a>
            </div>
         </motion.div>

      </div>
    </section>
  );
}
