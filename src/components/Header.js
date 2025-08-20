import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap, Heart, Users, Target, Lightbulb, Briefcase } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si el usuario ha scrolleado lo suficiente para cambiar el estado
      setScrolled(currentScrollY > 50);
      
      // Ocultar/mostrar el header basado en la dirección del scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll hacia abajo - ocultar header completamente
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scroll hacia arriba - mostrar header
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home", icon: Zap },
    { name: "Servicios", href: "#services", icon: Lightbulb },
    { name: "Valores", href: "#values", icon: Heart },
    { name: "Nosotros", href: "#about", icon: Users },
    { name: "Clientes", href: "#clients", icon: Briefcase },
    { name: "Contacto", href: "#contact", icon: Target },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#e7e7e7]/95 backdrop-blur-xl shadow-xl border-b border-gray-300"
          : "bg-transparent"
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isHidden ? -100 : 0, 
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/img/logo_lime.png"
              alt="Logo LIMELAB"
              className="h-32 w-auto object-contain"
            />
          </motion.div>

          {/* Menú desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-lime-500 font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Botón menú móvil */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-3 text-gray-700 hover:text-lime-500 font-medium transition-colors border-b border-gray-100 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
