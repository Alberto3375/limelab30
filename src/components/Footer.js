import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61579192204687",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/limelab30",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Valores", href: "#values" },
    { name: "Nosotros", href: "#about" },
    { name: "Clientes", href: "#clients" },
    { name: "Contacto", href: "#contact" },
  ];

  const services = [
    "Desarrollo de Software",
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Inteligencia Artificial",
    "Automatización",
    "Consultoría Tecnológica",
  ];

  const contactItems = [
    {
      icon: Mail,
      label: "Correo",
      value: "mendezalberto295@gmail.com",
      href: "mailto:mendezalberto295@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 (33) 3225-0942",
      href: "tel:+523332250942",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Guadalajara, Jalisco",
      href: null,
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#05070b] text-white"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Glow */}
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400/[0.06] blur-[140px]" />

        <div className="absolute right-[-200px] top-[-200px] h-[450px] w-[450px] rounded-full bg-emerald-500/[0.04] blur-[130px]" />

        {/* Top border glow */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-16 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025]"
        >
          {/* CTA glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[400px] w-[400px] rounded-full bg-lime-400/[0.08] blur-[100px]" />

          <div className="relative flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-lime-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime-400">
                  ¿Tienes un proyecto?
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Hagamos realidad
                <br />
                <span className="text-white/35">tu próxima idea.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                Cuéntanos qué necesitas y encontremos juntos la solución
                tecnológica adecuada para tu proyecto.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(163,230,53,0.12)] transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_50px_rgba(163,230,53,0.2)]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Hablemos
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================= */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <a
              href="#home"
              className="group inline-flex items-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-lime-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src="/img/logo_lime.png"
                  alt="LIMELAB Technologies"
                  className="relative h-14 w-auto object-contain sm:h-16"
                />
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45 sm:text-base">
              Creamos soluciones tecnológicas que convierten ideas en
              productos digitales funcionales, modernos y preparados para
              crecer.
            </p>

            {/* Philosophy */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Tecnología con propósito
              </span>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white/40 transition-all duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.08] hover:text-lime-400"
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-black text-lime-400">
                01
              </span>

              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                Navegación
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    <span className="h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-3" />

                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-black text-lime-400">
                02
              </span>

              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                Servicios
              </h3>
            </div>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    <span className="h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-3" />

                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-black text-lime-400">
                03
              </span>

              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                Contacto
              </h3>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-lime-400 transition-all duration-300 group-hover:border-lime-400/20 group-hover:bg-lime-400/[0.08]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/20">
                        {item.label}
                      </p>

                      <p className="truncate text-sm text-white/55 transition-colors duration-300 group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Status */}
            <div className="mt-7 flex items-center justify-between rounded-2xl border border-lime-400/10 bg-lime-400/[0.035] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Disponible para proyectos
                </span>
              </div>

              <span className="text-[10px] font-bold text-lime-400">
                ONLINE
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            DIVIDER
        ========================================================= */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/25">
            <span>
              © {currentYear} LIMELAB Technologies.
            </span>

            <span className="hidden text-white/10 sm:inline">
              /
            </span>

            <span className="flex items-center gap-1.5">
              Hecho con
              <Heart className="h-3 w-3 fill-current text-lime-400" />
              en México.
            </span>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-5 text-[11px] font-medium text-white/25">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-lime-400"
            >
              Privacidad
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-lime-400"
            >
              Términos
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-lime-400"
            >
              Cookies
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL BRAND LINE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="h-px w-12 bg-lime-400/40" />

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/[0.18]">
            Innovar · Construir · Transformar
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

