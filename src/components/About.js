import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Star,
  Code2,
  Heart,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alberto Méndez",
      role: "Fundador & Desarrollador",
      description:
        "Desarrollo soluciones digitales combinando ingeniería, diseño y tecnología para transformar ideas en productos funcionales.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Primer proyecto",
      description:
        "Comenzamos desarrollando nuestras primeras soluciones digitales y convirtiendo ideas en productos funcionales.",
    },
    {
      year: "2024",
      title: "Consolidación",
      description:
        "Nuevos proyectos y clientes nos permitieron fortalecer nuestra experiencia y metodología de trabajo.",
    },
    {
      year: "2025",
      title: "Evolución",
      description:
        "Ampliamos nuestra propuesta hacia desarrollo web, software, automatización y soluciones tecnológicas.",
    },
    {
      year: "2026",
      title: "LIMELAB",
      description:
        "Construimos una identidad tecnológica enfocada en crear soluciones modernas, cercanas y con propósito.",
    },
  ];

  const principles = [
    "Tecnología pensada para personas",
    "Diseño funcional y experiencias claras",
    "Soluciones escalables y mantenibles",
    "Comunicación directa y transparente",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -left-52 top-40 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[140px]" />
        <div className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-200/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* INTRO */}
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-[10px] font-black text-slate-950">
                03
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-700">
                Nosotros
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Tecnología con
              <br />
              <span className="text-slate-300">una visión humana.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-500 sm:text-lg">
              LIMELAB nace con una idea sencilla: la tecnología debe resolver
              problemas reales, ser fácil de entender y generar valor para las
              personas que la utilizan.
            </p>
          </div>
        </motion.div>

        {/* FOUNDER + PHILOSOPHY */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-7 sm:p-9"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-300/20 blur-[70px]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Fundador
                </span>
                <Code2 className="h-5 w-5 text-lime-500" />
              </div>

              <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-[28px] bg-lime-400 shadow-xl shadow-lime-200">
                <span className="text-4xl font-black text-slate-950">A</span>
              </div>

              {teamMembers.map((member) => (
                <div key={member.name}>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-lime-600">
                    {member.role}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {member.description}
                  </p>
                </div>
              ))}

              <div className="mt-8 flex items-center gap-2 border-t border-slate-200 pt-6">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                  Guadalajara · México
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-9"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-between gap-8 lg:h-full">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50">
                    <Heart className="h-5 w-5 text-lime-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Nuestra filosofía
                  </span>
                </div>

                <h3 className="max-w-xl text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  No hacemos tecnología por hacer tecnología.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                  Cada proyecto debe tener un propósito. Analizamos el
                  problema, entendemos a las personas que utilizarán la
                  solución y construimos tecnología alrededor de esa necesidad.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                    <div>
                      <span className="mb-1 block text-[9px] font-black text-lime-600">
                        0{index + 1}
                      </span>
                      <p className="text-xs font-bold leading-5 text-slate-600">
                        {principle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
                Nuestra trayectoria
              </p>
              <h3 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Una historia que sigue creciendo.
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-400">2023 — 2026</span>
          </div>

          <div className="relative">
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-slate-200 md:left-0 md:right-0 md:top-[17px] md:h-px md:w-auto" />

            <div className="grid gap-8 md:grid-cols-4 md:gap-5">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative pl-10 md:pl-0 md:pt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-[8px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-lime-400 shadow-sm md:left-0 md:top-0">
                    <span className="h-1 w-1 rounded-full bg-slate-950" />
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-xl hover:shadow-lime-100/30">
                    <span className="text-2xl font-black text-lime-500">
                      {milestone.year}
                    </span>
                    <h4 className="mt-3 text-sm font-black text-slate-900">
                      {milestone.title}
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MISSION / VISION */}
        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-8 sm:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime-400/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400">
                  <Rocket className="h-6 w-6 text-slate-950" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  01 / Misión
                </span>
              </div>

              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Crear tecnología
                <br />
                <span className="text-lime-400">que genere impacto.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Crear soluciones tecnológicas que generen impacto real en la
                vida de las personas y los negocios, integrando innovación,
                funcionalidad y compromiso humano.
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-lime-400">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Construir con propósito
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-[28px] border border-lime-200 bg-lime-50 p-8 sm:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-lime-300/30 blur-[80px]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Star className="h-6 w-6 text-lime-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-700/40">
                  02 / Visión
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
                Ser una tecnología
                <br />
                <span className="text-lime-600">cercana y confiable.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Convertirnos en un referente tecnológico por nuestra capacidad
                de crear soluciones innovadoras, cercanas y confiables,
                poniendo siempre a las personas en el centro.
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-lime-700">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                Pensar más allá
              </div>
            </div>
          </motion.div>
        </div>

        {/* FINAL */}
        <motion.div
          className="mt-20 flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport
