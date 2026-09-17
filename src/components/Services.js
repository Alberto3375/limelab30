import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe2,
  BrainCircuit,
  ArrowUpRight,
  Sparkles,
  Check,
  Workflow,
  ServerCog,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: Code2,
      category: "SOFTWARE",
      title: "Desarrollo de Software",
      description:
        "Creamos sistemas y plataformas a medida que se adaptan a la operación real de tu negocio, desde herramientas internas hasta soluciones empresariales completas.",
      features: [
        "Sistemas personalizados",
        "ERP y gestión empresarial",
        "Automatización de procesos",
      ],
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "bg-blue-500/20",
    },
    {
      number: "02",
      icon: Globe2,
      category: "DIGITAL",
      title: "Desarrollo Web",
      description:
        "Diseñamos sitios web modernos, rápidos y responsivos para empresas, marcas, proyectos personales y negocios que buscan una presencia digital profesional.",
      features: [
        "Sitios empresariales",
        "Landing pages",
        "Experiencias interactivas",
      ],
      gradient: "from-lime-300 via-lime-400 to-emerald-500",
      glow: "bg-lime-400/20",
    },
    {
      number: "03",
      icon: Smartphone,
      category: "MOBILE",
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos aplicaciones enfocadas en ofrecer experiencias simples, rápidas y funcionales para conectar tus servicios con tus usuarios.",
      features: ["Apps móviles", "Interfaces modernas", "Integración con APIs"],
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      glow: "bg-purple-500/20",
    },
    {
      number: "04",
      icon: BrainCircuit,
      category: "INTELLIGENCE",
      title: "Inteligencia Artificial",
      description:
        "Integramos inteligencia artificial en procesos y productos para automatizar tareas, analizar información y crear experiencias más inteligentes.",
      features: [
        "Asistentes inteligentes",
        "Automatización con IA",
        "Procesamiento de información",
      ],
      gradient: "from-orange-400 via-amber-500 to-red-500",
      glow: "bg-orange-500/20",
    },
    {
      number: "05",
      icon: Workflow,
      category: "AUTOMATION",
      title: "Automatización",
      description:
        "Convertimos procesos manuales y repetitivos en flujos digitales más eficientes para ahorrar tiempo, reducir errores y mejorar la operación.",
      features: ["Flujos automatizados", "Integraciones", "Procesos empresariales"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      glow: "bg-teal-500/20",
    },
    {
      number: "06",
      icon: ServerCog,
      category: "CONSULTING",
      title: "Consultoría Tecnológica",
      description:
        "Te ayudamos a identificar oportunidades, elegir tecnologías y construir una estrategia digital alineada con los objetivos de tu negocio.",
      features: [
        "Arquitectura tecnológica",
        "Transformación digital",
        "Optimización de sistemas",
      ],
      gradient: "from-pink-400 via-rose-500 to-red-600",
      glow: "bg-rose-500/20",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#05070b] py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[550px] w-[550px] rounded-full bg-purple-500/10 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-20 max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-lime-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Lo que hacemos
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Soluciones para
            <span className="block bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              transformar ideas.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Diseñamos, desarrollamos e integramos tecnología para convertir
            problemas reales en soluciones digitales funcionales, escalables y
            fáciles de utilizar.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.055]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full ${service.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  <span className="text-sm font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-white/40">
                    {service.number}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-lime-400">
                    {service.category}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/55"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10">
                        <Check className="h-3 w-3 text-lime-400" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-xs font-semibold text-white/25">
                    LIMELAB Technologies
                  </span>

                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-lime-400/40 group-hover:text-lime-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-full`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* BANNER */}
        <motion.div
          className="relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-lime-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                  ¿Tienes una idea?
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                No encuentras exactamente
                <span className="text-white/35"> lo que necesitas.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">
                No hay problema. Analizamos tu proyecto y construimos una
                solución tecnológica adaptada a tus necesidades, presupuesto y
                objetivos.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.15)] transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_45px_rgba(163,230,53,0.25)]"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/25">
            Diseñamos · Desarrollamos · Automatizamos
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
