import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const lastScrollY = useRef(0);

  /* =========================================================
     NAVIGATION
  ========================================================== */

  const navItems = [
    {
      name: "Inicio",
      href: "#home",
      id: "home",
    },
    {
      name: "Servicios",
      href: "#services",
      id: "services",
    },
    {
      name: "Valores",
      href: "#values",
      id: "values",
    },
    {
      name: "Nosotros",
      href: "#about",
      id: "about",
    },
    {
      name: "Clientes",
      href: "#clients",
      id: "clients",
    },
  ];

  /* =========================================================
     SCROLL HEADER
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
       * Header background
       */

      setScrolled(currentScrollY > 30);

      /*
       * Hide / show header
       */

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

      /*
       * Active section
       */

      const sections = [
        "home",
        "services",
        "values",
        "about",
        "clients",
        "contact",
      ];

      const scrollPosition = currentScrollY + 180;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     BODY LOCK MOBILE MENU
  ========================================================== */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     CLOSE MENU
  ========================================================== */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{
          y: isHidden ? -120 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-white/[0.08] bg-[#05070b]/85 shadow-2xl backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

            <div className="flex h-[76px] items-center justify-between">

              {/* =================================================
                  LOGO
              ================================================== */}

              <motion.a
                href="#home"
                onClick={closeMenu}
                className="group relative flex items-center"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <div className="absolute -inset-3 rounded-2xl bg-lime-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src="/img/logo_lime.png"
                  alt="LIMELAB Technologies"
                  className="relative z-10 h-12 w-auto object-contain sm:h-14"
                />
              </motion.a>

              {/* =================================================
                  DESKTOP NAV
              ================================================== */}

              <nav className="hidden items-center gap-1 lg:flex">

                {navItems.map((item, index) => {
                  const isActive =
                    activeSection === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className="group relative px-4 py-2"
                      initial={{
                        opacity: 0,
                        y: -15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.1 + index * 0.06,
                        duration: 0.4,
                      }}
                    >
                      <span
                        className={`relative z-10 text-[13px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Active indicator */}

                      <motion.span
                        className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400"
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      />

                      {/* Hover background */}

                      <span className="absolute inset-0 rounded-xl bg-white/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.a>
                  );
                })}
              </nav>

              {/* =================================================
                  DESKTOP CONTACT BUTTON
              ================================================== */}

              <motion.a
                href="#contact"
                className="group hidden items-center gap-2 rounded-xl border border-lime-400/20 bg-lime-400/[0.08] px-4 py-2.5 text-xs font-bold text-lime-300 transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-400 hover:text-black lg:flex"
                whileHover={{
                  scale: 1.03,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Hablemos

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>

              {/* =================================================
                  MOBILE BUTTON
              ================================================== */}

              <motion.button
                type="button"
                aria-label={
                  isMenuOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
                }
                aria-expanded={isMenuOpen}
                onClick={() =>
                  setIsMenuOpen((prev) => !prev)
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-md transition-colors hover:bg-white/[0.08] lg:hidden"
                whileTap={{
                  scale: 0.92,
                }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
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

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMenu}
            />

            {/* Panel */}

            <motion.div
              className="fixed left-4 right-4 top-[84px] z-50 overflow-hidden rounded-[28px] border border-white/10 bg-[#080b10]/95 shadow-2xl backdrop-blur-2xl lg:hidden"
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Glow */}

              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-lime-400/10 blur-[80px]" />

              <div className="relative p-4">

                {/* Mobile navigation */}

                <nav className="space-y-1">

                  {navItems.map((item, index) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                          isActive
                            ? "bg-lime-400/[0.08]"
                            : "hover:bg-white/[0.04]"
                        }`}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.05 + index * 0.06,
                        }}
                      >
                        <div className="flex items-center gap-4">

                          {/* Number */}

                          <span
                            className={`text-[10px] font-bold ${
                              isActive
                                ? "text-lime-400"
                                : "text-white/20"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          {/* Name */}

                          <span
                            className={`text-sm font-semibold ${
                              isActive
                                ? "text-white"
                                : "text-white/50 group-hover:text-white"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>

                        <ChevronDown
                          className={`h-4 w-4 -rotate-90 transition-all duration-300 ${
                            isActive
                              ? "text-lime-400"
                              : "text-white/15 group-hover:text-white/40"
                          }`}
                        />
                      </motion.a>
                    );
                  })}

                </nav>

                {/* Divider */}

                <div className="my-4 h-px bg-white/[0.07]" />

                {/* Contact */}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-2xl bg-lime-400 px-5 py-4 text-sm font-bold text-black"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  <span>Hablemos de tu proyecto</span>

                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                {/* Footer */}

                <div className="flex items-center justify-between px-2 pb-1 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                    LIMELAB Technologies
                  </span>

                  <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/20">
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
