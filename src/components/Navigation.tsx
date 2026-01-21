import { Menu, X, Home, FileText, Users, ChevronRight, Snowflake, Gavel, FileBarChart, Info, HelpCircle, Calendar, Newspaper, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, to: '/#home' },
    { name: 'Issues', icon: FileText, to: '/#issues' },
    { name: 'News', icon: Newspaper, to: '/news' },
    { name: 'Blog', icon: BookOpen, to: '/blog' },
  ];

  const menuItems = [
    { name: 'Council Meeting', icon: Users, href: '#' },
    { name: 'Snow Events', icon: Snowflake, href: '#' },
    { name: 'Bylaws', icon: Gavel, href: '/bylaws' },
    { name: 'Budget', icon: FileBarChart, href: '/budget' },
    { name: 'About Ward 6', icon: Info, href: '#' },
    { name: 'FAQ', icon: HelpCircle, href: '/faq' },
  ];

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 pb-24 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all hover:shadow-md group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#003F72]/10 flex items-center justify-center mr-4 group-hover:bg-[#b11116] transition-colors duration-300">
                        <Icon className="text-[#003F72] group-hover:text-white transition-colors duration-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#003F72] group-hover:text-[#b11116] transition-colors">{item.name}</h3>
                      </div>
                      <ChevronRight className="text-gray-400 group-hover:text-[#b11116] transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#003F72] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex justify-around items-center py-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex flex-col items-center text-[#003F72] hover:text-[#b11116] transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={24} />
                    <span className="text-xs mt-1 font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex flex-col items-center transition-colors p-2 ${isMenuOpen ? 'text-[#b11116]' : 'text-[#003F72] hover:text-[#b11116]'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                <span className="text-xs mt-1 font-bold">Menu</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-black text-[#b11116] tracking-tight">
                Paul 2026
              </span>
              <span className="ml-2 text-sm font-semibold text-[#003F72] tracking-wide uppercase">for Ward 6 Kitchener</span>
            </div>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-[#003F72] hover:text-[#b11116] transition-colors font-bold text-sm uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center space-x-2 font-bold px-4 py-2 rounded-md transition-colors ${
                  isMenuOpen 
                    ? 'bg-[#b11116] text-white' 
                    : 'bg-gray-100 text-[#003F72] hover:bg-gray-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                <span>MENU</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed bottom nav */}
      <div className="h-20"></div>
    </>
  );
}
