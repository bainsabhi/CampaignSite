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
    { name: 'Bylaws', icon: Gavel, href: '/bylaws' },
    { name: 'Budget', icon: FileBarChart, href: '/budget' },
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
            className="fixed inset-0 z-40 backdrop-blur-md pt-20 pb-24 overflow-y-auto"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.96)" }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-6 rounded-xl transition-all hover:shadow-md group campaign-card"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300" style={{ backgroundColor: "color-mix(in oklab, var(--campaign-primary) 10%, white)" }}>
                        <Icon className="transition-colors duration-300" size={24} style={{ color: "var(--campaign-primary)" }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold transition-colors" style={{ color: "var(--campaign-primary)" }}>{item.name}</h3>
                      </div>
                      <ChevronRight className="text-gray-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50" style={{ borderTopColor: "var(--campaign-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex justify-around items-center py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex flex-col items-center rounded-lg transition-all py-1 px-1.5"
                    style={{ color: "var(--campaign-primary)" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="text-[10px] mt-0.5 font-medium">{item.name}</span>
                  </Link>
                );
              })}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col items-center transition-all py-1 px-1.5 rounded-lg"
                  style={{ color: isMenuOpen ? "var(--campaign-accent)" : "var(--campaign-primary)" }}
                >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                <span className="text-[10px] mt-0.5 font-bold">Menu</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center py-3">
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight" style={{ color: "var(--campaign-accent)" }}>
                Paul 2026
              </span>
              <span className="ml-2 text-sm font-semibold tracking-wide uppercase" style={{ color: "var(--campaign-primary)" }}>for Ward 6 Kitchener</span>
            </div>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="transition-colors font-bold text-sm uppercase tracking-wide"
                  style={{ color: "var(--campaign-primary)" }}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center space-x-2 font-bold px-4 py-2 rounded-md transition-colors ${
                  isMenuOpen 
                    ? 'text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={isMenuOpen ? { backgroundColor: "var(--campaign-accent)" } : { color: "var(--campaign-primary)" }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                <span>MENU</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed bottom nav */}
      <div className="h-16 md:h-16"></div>
    </>
  );
}
