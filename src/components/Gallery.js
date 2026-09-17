import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Play,
  ExternalLink,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filters = [
    { id: "all", label: "Todo" },
    { id: "web", label: "Web & Software" },
    { id: "invitaciones", label: "Invitaciones" },
    { id: "hardware", label: "PC Gamer" },
  ];

  // ⚠️ Aquí solo agrega las rutas reales de tus imágenes y videos
  const items = [
    {
      id: 1,
      type: "image",
      category: "web",
      title: "Sitio Empresarial — Farmacia Dr. Bee",
      description:
        "Sistema web administrable con gestión de inventario y reportes.",
      src: "/img/farmacia-drbee.png",
      tags: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      id: 2,
      type: "image",
      category: "web",
      title: "E-commerce — Yomonalex",
      description:
        "Tienda online de muebles de acero inoxidable con carrito y pedidos.",
      src: "/img/yomonalex.png",
      tags: ["Laravel", "MySQL", "TailwindCSS"],
    },
    {
      id: 3,
      type: "video",
      category: "invitaciones",
      title: "Invitación de Boda — Ana & Luis",
      description:
        "Invitación digital con animaciones, música y confirmación por WhatsApp.",
      src: "/videos/boda-ana-luis.mp4",
      poster: "/img/invitacion-boda-poster.jpg",
      tags: ["Boda", "Animaciones", "WhatsApp"],
    },
    {
      id: 4,
      type: "image",
      category: "invitaciones",
      title: "Invitación XV Años — Sofía",
      description:
        "Diseño moderno con cuenta regresiva y mapa interactivo.",
      src: "/img/invitacion-xv-sofia.jpg",
      tags: ["XV Años", "Cuenta regresiva", "Mapa"],
    },
    {
      id: 5,
      type: "image",
      category: "hardware",
      title: "PC Gamer — Cambio de RAM y SSD",
      description:
        "Actualización completa con 32GB RAM y SSD NVMe 1TB.",
      src: "/img/pc-gamer-ram.jpg",
      tags: ["RAM", "SSD NVMe", "Optimización"],
    },
    {
      id: 6,
      type: "video",
      category: "hardware",
      title: "Mantenimiento Completo PC Gamer",
      description:
        "Limpieza profunda, cambio de pasta térmica y optimización.",
      src: "/videos/mantenimiento-pc.mp4",
      poster: "/img/mantenimiento-pc-poster.jpg",
      tags: ["Limpieza", "Pasta térmica", "Temperaturas"],
    },
    {
      id: 7,
      type: "image",
      category: "web",
      title: "Landing Page — Startup Tecnológica",
      description:
        "Landing moderna con animaciones y formulario de contacto.",
      src: "/img/landing-startup.jpg",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 8,
      type: "image",
      category: "hardware",
      title: "Cambio de Fuente de Poder",
      description:
        "Instalación de fuente certificada 80+ Gold de 750W.",
      src: "/img/fuente-poder.jpg",
      tags: ["Fuente 80+", "Cableado", "Wattage"],
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-lime-300/20 blur-[150px]" />
        <div className="absolute right-[-15%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-emerald-200/25 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-lime-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-700">
              Portafolio
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Proyectos que
            <span className="block bg-gradient-to-r from-lime-500 via-lime-400 to-emerald-500 bg-clip-text text-transparent">
              hablan por nosotros.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Una selección de sitios web, invitaciones digitales y trabajos de
            hardware que hemos realizado.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-2xl border px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "border-lime-400 bg-lime-400 text-slate-950 shadow-lg shadow-lime-200"
                    : "border-slate-200 bg-white text-slate-600 hover:border-lime-300 hover:bg-lime-50 hover:text-slate-950"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.button
                key={item.id}
                layout
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-[0_25px_60px_rgba(163,230,53,0.15)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {/* Media */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {item.type === "video" ? (
                    <>
                      <img
                        src={item.poster || item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 fill-lime-500 text-lime-500" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Category badge */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-slate-800 backdrop-blur-md">
                    {item.category === "web"
                      ? "Web"
                      : item.category === "invitaciones"
                      ? "Invitación"
                      : "PC Gamer"}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-5">
                 
