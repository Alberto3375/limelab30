import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const lastScrollY = useRef(0);

  const navItems = [
    { name: "Inicio", href: "#home", id: "home" },
    { name: "Áreas", href: "#areas", id: "areas" },
    { name: "Servicios", href: "#services", id: "services" },
    { name: "Portafolio", href: "#gallery", id: "gallery" },
    { name: "Valores", href: "#values", id: "values" },
    { name: "Nosotros", href: "#about", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY <= 20) {
        setIsHidden(false);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 120
      ) {
        setIsHidden(true);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;

      const sections = [
        "home",
        "areas",
        "services",
        "gallery",
        "values",
        "about",
        "contact",
      ];

      const scrollPosition = currentScrollY + 180;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isHidden ? -120 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{ pointerEvents: isHidden ? "none" : "auto" }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex h-[76px] items-center justify-between">
              {/* LOGO */}
              <motion.a
                href="#home"
                onClick={closeMenu}
                className="group relative flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute -inset-3 rounded-2xl bg-lime-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src="/img/logo_limelab.png"
                  alt="LIMELAB Technologies"
                  className="relative z-10 h-11 w-auto object-contain sm:h-12"
                />
              </motion.a>

              {/* DESKTOP NAV */}
              <nav className="hidden items-center gap-1 lg:flex">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className="group relative px-3.5 py-2"
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <span
                        className={`relative z-10 text-[13px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-slate-950"
                            : "text-slate-500 group-hover:text-slate-950"
                        }`}
                      >
                        {item.name}
                      </span>

                      <motion.span
                        className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                      />

                      <span className="absolute inset-0 rounded-xl bg-lime-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.a>
                  );
                })}
              </nav>

              {/* DESKTOP CTA */}
              <motion.a
                href="#contact"
                className="group hidden items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-lime-400 hover:text-slate-950 lg:flex"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Hablemos
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              {/* MOBILE BUTTON */}
              <motion.button
                type="button"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-lime-50 lg:hidden"
                whileTap={{ scale: 0.92 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed left-4 right-4 top-[84px] z-50 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-lime-300/30 blur-[80px]" />

              <div className="relative p-4">
                <nav className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                          isActive ? "bg-lime-50" : "hover:bg-slate-50"
                        }`}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.05 }}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-[10px] font-bold ${
                              isActive ? "text-lime-600" : "text-slate-300"
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              isActive
                                ? "text-slate-950"
                                : "text-slate-500 group-hover:text-slate-950"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 -rotate-90 transition-all duration-300 ${
                            isActive
                              ? "text-lime-500"
                              : "text-slate-300 group-hover:text-slate-500"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </nav>

                <div className="my-4 h-px bg-slate-100" />

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-lime-400 hover:text-slate-950"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span>Hablemos de tu proyecto</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                <div className="flex items-center justify-between px-2 pb-1 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    LIMELAB Technologies
                  </span>
                  <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    Online
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
