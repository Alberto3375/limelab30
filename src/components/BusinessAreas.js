import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  MonitorCog,
  PartyPopper,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const BusinessAreas = () => {
  const areas = [
    {
      id: "web",
      number: "01",
      icon: Code2,
      title: "Desarrollo Web & Software",
      subtitle: "Sitios, sistemas y e-commerce",
      description:
        "Creamos sitios web empresariales, tiendas online, landing pages y sistemas administrativos a medida. Todo optimizado, responsive y listo para escalar.",
      features: [
        "Sitios empresariales",
        "E-commerce",
        "Sistemas a medida",
        "Landing pages",
      ],
      href: "#services",
      cta: "Ver servicios web",
    },
    {
      id: "hardware",
      number: "02",
      icon: MonitorCog,
      title: "Mantenimiento PC Gamer",
      subtitle: "Hardware y optimización",
      description:
        "Servicio técnico especializado: cambio de RAM, fuentes de poder, placas madre, limpieza, instalación de SSD y mantenimiento completo para PCs Gamer.",
      features: [
        "Cambio de RAM",
        "Fuentes de poder",
        "Placas madre",
        "Optimización y limpieza",
      ],
      href: "#services",
      cta: "Ver servicios PC",
    },
    {
      id: "invitaciones",
      number: "03",
      icon: PartyPopper,
      title: "Invitaciones Digitales",
      subtitle: "Bodas, XV años y eventos",
      description:
        "Diseñamos invitaciones digitales interactivas para bodas, XV años, cumpleaños y eventos especiales. Con animaciones, música, mapas y confirmación por WhatsApp.",
      features: [
        "Bodas y XV años",
        "Invitaciones animadas",
        "Confirmación WhatsApp",
        "Diseño personalizado",
      ],
      href: "#gallery",
      cta: "Ver portafolio",
    },
  ];

  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-lime-300/20 blur-[150px]" />
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
          className="mx-auto mb-20 max-w-3xl text-center"
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
              Áreas de negocio
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Tres especialidades,
            <span className="block bg-gradient-to-r from-lime-500 via-lime-400 to-emerald-500 bg-clip-text text-transparent">
              un solo equipo.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            En LIMELAB combinamos desarrollo de software, servicio técnico de
            hardware y diseño digital. Elige el área que necesitas y descubre
            todo lo que podemos hacer por ti.
          </p>
        </motion.div>

        {/* AREAS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.a
                key={area.id}
                href={area.href}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-[0_25px_60px_rgba(163,230,53,0.15)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-300/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-500 shadow-lg shadow-lime-200/60 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-lime-500">
                    {area.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
                    {area.subtitle}
                  </p>

                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {area.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 mt-6 space-y-2.5">
                  {area.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-600" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-slate-100 pt-5 pt-6">
                  <span className="text-xs font-black uppercase tracking-[0.15em] text-lime-600">
                    {area.cta}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
