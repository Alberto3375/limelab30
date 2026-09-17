import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  MonitorCog,
  Cpu,
  HardDrive,
  Zap,
  Wrench,
  Fan,
  PartyPopper,
  Heart,
  Music,
  MapPin,
  Calendar,
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Desarrollo Web & Software", icon: Code2 },
    { id: "hardware", label: "PC Gamer & Hardware", icon: MonitorCog },
    { id: "invitaciones", label: "Invitaciones Digitales", icon: PartyPopper },
  ];

  const services = {
    web: [
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
      },
      {
        number: "02",
        icon: Globe2,
        category: "DIGITAL",
        title: "Desarrollo Web",
        description:
          "Diseñamos sitios web modernos, rápidos y responsivos para empresas, marcas y negocios que buscan una presencia digital profesional.",
        features: [
          "Sitios empresariales",
          "Landing pages",
          "Experiencias interactivas",
        ],
      },
      {
        number: "03",
        icon: Smartphone,
        category: "MOBILE",
        title: "Aplicaciones Móviles",
        description:
          "Desarrollamos aplicaciones enfocadas en ofrecer experiencias simples, rápidas y funcionales para conectar tus servicios con tus usuarios.",
        features: [
          "Apps móviles",
          "Interfaces modernas",
          "Integración con APIs",
        ],
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
      },
      {
        number: "05",
        icon: Workflow,
        category: "AUTOMATION",
        title: "Automatización",
        description:
          "Convertimos procesos manuales y repetitivos en flujos digitales más eficientes para ahorrar tiempo, reducir errores y mejorar la operación.",
        features: [
          "Flujos automatizados",
          "Integraciones",
          "Procesos empresariales",
        ],
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
      },
    ],
    hardware: [
      {
        number: "01",
        icon: Cpu,
        category: "COMPONENTES",
        title: "Cambio de RAM",
        description:
          "Ampliamos o reemplazamos la memoria RAM de tu PC Gamer para mejorar el rendimiento en juegos y aplicaciones exigentes.",
        features: [
          "Diagnóstico de compatibilidad",
          "Instalación profesional",
          "Pruebas de rendimiento",
        ],
      },
      {
        number: "02",
        icon: Zap,
        category: "ENERGÍA",
        title: "Fuentes de Poder",
        description:
          "Reemplazamos fuentes de poder dañadas o de bajo wattage por modelos certificados que soporten tu configuración completa.",
        features: [
          "Cálculo de wattage real",
          "Fuentes certificadas 80+",
          "Instalación y cableado",
        ],
      },
      {
        number: "03",
        icon: ServerCog,
        category: "PLACAS",
        title: "Cambio de Placa Madre",
        description:
          "Sustituimos placas madre compatibles con tu procesador y RAM para actualizar o reparar tu equipo de forma segura.",
        features: [
          "Compatibilidad garantizada",
          "Actualización de BIOS",
          "Montaje completo",
        ],
      },
      {
        number: "04",
        icon: HardDrive,
        category: "ALMACENAMIENTO",
        title: "Instalación de SSD / NVMe",
        description:
          "Instalamos unidades SSD o NVMe para que tu sistema operativo y juegos carguen en segundos.",
        features: [
          "Migración de sistema",
          "Optimización de arranque",
          "Clonado de datos",
        ],
      },
      {
        number: "05",
        icon: Fan,
        category: "LIMPIEZA",
        title: "Limpieza y Mantenimiento",
        description:
          "Limpieza profunda de componentes, cambio de pasta térmica y revisión de ventilación para mantener temperaturas óptimas.",
        features: [
          "Limpieza interna completa",
          "Cambio de pasta térmica",
          "Revisión de flujo de aire",
        ],
      },
      {
        number: "06",
        icon: Wrench,
        category: "OPTIMIZACIÓN",
        title: "Optimización General",
        description:
          "Ajustamos software, drivers y configuración de Windows para maximizar el rendimiento de tu PC Gamer.",
        features: [
          "Actualización de drivers",
          "Optimización de Windows",
          "Configuración de rendimiento",
        ],
      },
    ],
    invitaciones: [
      {
        number: "01",
        icon: Heart,
        category: "BODAS",
        title: "Invitaciones de Boda",
        description:
          "Invitaciones digitales elegantes con animaciones, música, galería de fotos y confirmación de asistencia por WhatsApp.",
        features: [
          "Diseño personalizado",
          "Galería y música",
          "Confirmación por WhatsApp",
        ],
      },
      {
        number: "02",
        icon: PartyPopper,
        category: "XV AÑOS",
        title: "Invitaciones de XV Años",
        description:
          "Invitaciones modernas y coloridas para quinceañeras, con cuenta regresiva, mapas interactivos y secciones de regalos.",
        features: [
          "Cuenta regresiva",
          "Mapa interactivo",
          "Sección de regalos",
        ],
      },
      {
        number: "03",
        icon: Calendar,
        category: "EVENTOS",
        title: "Cumpleaños y Eventos",
        description:
          "Invitaciones digitales para cumpleaños, baby showers y eventos especiales con diseño único y funcional.",
        features: [
          "Diseño temático",
          "Formulario RSVP",
          "Compartir por link",
        ],
      },
      {
        number: "04",
        icon: Music,
        category: "MULTIMEDIA",
        title: "Música y Animaciones",
        description:
          "Agregamos música de fondo, animaciones suaves y transiciones elegantes para hacer única cada invitación.",
        features: [
          "Música personalizada",
          "Animaciones suaves",
          "Efectos visuales",
        ],
      },
      {
        number: "05",
        icon: MapPin,
        category: "UBICACIÓN",
        title: "Mapas Interactivos",
        description:
          "Integramos mapas con la ubicación exacta del evento y botones para abrir en Google Maps o Waze.",
        features: [
          "Google Maps integrado",
          "Botón Waze",
          "Indicaciones claras",
        ],
      },
      {
        number: "06",
        icon: Sparkles,
        category: "PERSONALIZACIÓN",
        title: "Diseño 100% Personalizado",
        description:
          "Cada invitación se diseña desde cero según los colores, temática y estilo del evento.",
        features: [
          "Colores a elección",
          "Tipografías únicas",
          "Ilustraciones a medida",
        ],
      },
    ],
  };

  const currentServices = services[activeTab];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 text-slate-950 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-lime-300/20 blur-[150px]" />
        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-lime-200/30 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[550px] w-[550px] rounded-full bg-emerald-200/20 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-2 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-lime-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-700">
              Lo que hacemos
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Servicios para
            <span className="block bg-gradient-to-r from-lime-500 via-lime-400 to-emerald-500 bg-clip-text text-transparent">
              cada necesidad.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Elige una categoría y descubre todo lo que podemos hacer por ti.
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-2.5 rounded-2xl border px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "border-lime-400 bg-lime-400 text-slate-950 shadow-lg shadow-lime-200"
                    : "border-slate-200 bg-white text-slate-600 hover:border-lime-300 hover:bg-lime-50 hover:text-slate-950"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive ? "text-slate-950" : "text-lime-600"
                  }`}
                />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.number}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-[0_25px_60px_rgba(163,230,53,0.15)]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                >
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-300/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start justify-between">
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-500 shadow-lg shadow-lime-200/60"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>

                    <span className="text-sm font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-lime-500">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative z-10 mt-8">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
                      {service.category}
                    </p>
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100">
                          <Check className="h-3 w-3 text-lime-600" />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                      LIMELAB
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="relative mt-20 overflow-hidden rounded-[32px] border border-lime-200 bg-gradient-to-br from-lime-50 to-white p-8 sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-300/40 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-lime-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-lime-700">
                  ¿No encuentras lo que buscas?
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Armamos una solución
                <span className="block text-slate-400">
                  adaptada a ti.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Cuéntanos tu necesidad y te ayudamos a encontrar la mejor
                solución tecnológica.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-lime-400 hover:text-slate-950"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
