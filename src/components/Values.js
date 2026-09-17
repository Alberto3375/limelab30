import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  HeartHandshake,
  Target,
  UsersRound,
  Leaf,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";

const Values = () => {
  const values = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Innovación",
      subtitle: "Pensamos diferente",
      description:
        "Exploramos nuevas tecnologías, ideas y metodologías para crear soluciones que realmente generen valor.",
      accent: "from-yellow-400 via-amber-400 to-orange-500",
      glow: "bg-yellow-400/20",
    },
    {
      number: "02",
      icon: HeartHandshake,
      title: "Compromiso",
      subtitle: "Construimos relaciones",
      description:
        "Trabajamos con responsabilidad, transparencia y cercanía para construir relaciones duraderas con nuestros clientes.",
      accent: "from-rose-400 via-pink-500 to-red-500",
      glow: "bg-pink-400/20",
    },
    {
      number: "03",
      icon: Target,
      title: "Excelencia",
      subtitle: "Cada detalle importa",
      description:
        "Buscamos entregar productos y servicios de alta calidad, cuidando cada etapa del proceso y cada detalle.",
      accent: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "bg-blue-400/20",
    },
    {
      number: "04",
      icon: UsersRound,
      title: "Cercanía",
      subtitle: "Las personas primero",
      description:
        "Escuchamos, entendemos y acompañamos a nuestros clientes para convertir sus necesidades en soluciones.",
      accent: "from-violet-400 via-purple-500 to-fuchsia-600",
      glow: "bg-purple-400/20",
    },
    {
      number: "05",
      icon: Leaf,
      title: "Responsabilidad",
      subtitle: "Tecnología con propósito",
      description:
        "Desarrollamos soluciones pensando en el impacto que generamos en las personas, las empresas y nuestro entorno.",
      accent: "from-emerald-400 via-green-500 to-teal-600",
      glow: "bg-emerald-400/20",
    },
  ];

  return (
    <section
      id="values"
      className="relative overflow-hidden bg-[#05070b] py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />

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
              Lo que nos define
            </span>
          </motion.div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Tecnología con
            <span className="block bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              propósito.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Nuestra forma de trabajar está basada en principios que nos ayudan
            a crear soluciones tecnológicas útiles, humanas y preparadas para
            crecer junto con nuestros clientes.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.number}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.055] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full ${value.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.accent} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-white/40">
                    {value.number}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                    {value.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                    {value.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/30">
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${value.accent}`}
                    />
                    LIMELAB Technologies
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-lime-400/40 group-hover:text-lime-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${value.accent} transition-all duration-500 group-hover:w-full`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* PHILOSOPHY */}
        <motion.div
          className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-lime-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                  Nuestra filosofía
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                No solo hacemos tecnología.
                <span className="block text-white/35">
                  Creamos soluciones que tienen sentido.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
                En LIMELAB creemos que la tecnología debe resolver problemas
                reales. Por eso combinamos creatividad, experiencia técnica y
                una visión centrada en las personas para transformar ideas en
                soluciones funcionales.
              </p>
            </div>

            <div className="min-w-[230px] space-y-4">
              {[
                "Soluciones pensadas para personas",
                "Tecnología preparada para crecer",
                "Diseño y funcionalidad",
                "Acompañamiento cercano",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/10">
                    <Check className="h-4 w-4 text-lime-400" />
                  </div>
                  <span className="text-sm font-medium text-white/65">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/25">
            Innovar · Construir · Transformar
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
