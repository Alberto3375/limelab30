import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  ShoppingCart,
  X,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      number: "01",
      name: "Farmacia Dr. Bee",
      project: "Sistema Web Administrable",
      category: "Desarrollo Web",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "Sistema web administrable desarrollado para gestionar productos, usuarios e inventario desde una plataforma centralizada y responsive.",
      impact:
        "La solución permitió centralizar la operación y mejorar el control de inventario.",
      icon: Database,
      image: "/img/farmacia-drbee.png",
      features: [
        "Panel administrativo",
        "Gestión de inventario",
        "Reportes automáticos",
        "Interfaz responsive",
        "Backups automáticos",
        "Sistema de roles",
      ],
    },
    {
      id: 2,
      number: "02",
      name: "Yomonalex",
      project: "E-commerce de Muebles",
      category: "Comercio Digital",
      technologies: ["Laravel", "MySQL", "TailwindCSS"],
      description:
        "Plataforma e-commerce para la comercialización de muebles de acero inoxidable, incorporando catálogo, carrito, pedidos y administración.",
      impact:
        "La plataforma permitió llevar el proceso comercial al entorno digital y mejorar la experiencia de compra.",
      icon: ShoppingCart,
      image: "/img/yomonalex.png",
      features: [
        "Catálogo digital",
        "Checkout optimizado",
        "Carrito de compras",
        "Panel de administración",
        "Optimización SEO",
        "Seguimiento de pedidos",
      ],
    },
  ];

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  useEffect(() => {
    if (selectedClient) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedClient]);

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-lime-300/15 blur-[130px]" />
        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-lime-200/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-[10px] font-black text-slate-950">
                04
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-700">
                Portafolio
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Proyectos que
              <br />
              <span className="text-slate-300">hablan por nosotros.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Una selección de proyectos desarrollados para convertir
              necesidades reales en experiencias digitales funcionales.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Proyectos seleccionados
          </div>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid gap-7 lg:grid-cols-2">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <motion.article
                key={client.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-200 hover:shadow-2xl hover:shadow-slate-200/70"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedClient(client)}
                  className="relative block h-[280px] w-full overflow-hidden bg-slate-100 text-left sm:h-[350px]"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" />

                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-black text-white backdrop-blur-md">
                    {client.number}
                  </div>

                  <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {client.category}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-lime-300">
                        Proyecto
                      </p>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">
                        {client.name}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-slate-950 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </button>

                <div className="p-6 sm:p-7">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-50">
                      <Icon className="h-5 w-5 text-lime-600" />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Solución
                      </p>
                      <h4 className="mt-1 text-lg font-black text-slate-900">
                        {client.project}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-500">
                    {client.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {client.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-500 transition-colors duration-300 group-hover:border-lime-200 group-hover:bg-lime-50 group-hover:text-lime-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Ver proyecto
                    </span>
                    <span className="flex items-center gap-2 text-xs font-black text-lime-600">
                      Detalles
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Cada proyecto comienza con una necesidad diferente. Nuestro trabajo
            consiste en convertirla en una solución tecnológica clara, funcional
            y preparada para crecer.
          </p>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-white/20 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedClient(null)}
                aria-label="Cerrar"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:bg-lime-400 hover:text-slate-950"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[260px] overflow-hidden sm:h-[380px]">
                <img
                  src={selectedClient.image}
                  alt={selectedClient.name}
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-6 right-6 sm:left-10 sm:right-10">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-lime-300">
                    {selectedClient.category}
                  </p>
                  <h3 className="text-3xl font-black text-white sm:text-5xl">
                    {selectedClient.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {selectedClient.project}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50">
                        <Code2 className="h-5 w-5 text-lime-600" />
                      </div>
                      <h4 className="text-xl font-black text-slate-900">
                        Sobre el proyecto
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-500">
                      {selectedClient.description}
                    </p>

                    <div className="mt-7 rounded-2xl border border-lime-200 bg-lime-50/60 p-5">
                      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.15em] text-lime-700">
                        Impacto
                      </p>
                      <p className="text-sm leading-6 text-slate-700">
                        {selectedClient.impact}
                      </p>
                    </div>

                    <div className="mt-8">
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Tecnologías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedClient.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400">
                        <CheckCircle2 className="h-5 w-5 text-slate-950" />
                      </div>
                      <h4 className="text-xl font-black text-slate-900">
                        Características
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {selectedClient.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-lime-600" />
                          <span className="text-sm font-medium text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7">
                      <button
                        type="button"
                        onClick={() => setSelectedClient(null)}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-xs font-black text-white transition-all duration-300 hover:bg-lime-400 hover:text-slate-950"
                      >
                        Cerrar proyecto
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-45" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
