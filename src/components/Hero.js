import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
  Zap,
  Terminal,
} from "lucide-react";

const Hero = () => {
  const floatingElements = [
    { icon: Code2, className: "left-[6%] top-[22%]", delay: 0, duration: 8 },
    { icon: Globe2, className: "right-[8%] top-[20%]", delay: 1, duration: 9 },
    { icon: Smartphone, className: "left-[10%] bottom-[22%]", delay: 2, duration: 10 },
    { icon: Cpu, className: "right-[10%] bottom-[20%]", delay: 1.5, duration: 8 },
  ];

  const stats = [
    { number: "01", label: "Desarrollo a medida" },
    { number: "02", label: "Soluciones digitales" },
    { number: "03", label: "Tecnología con propósito" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white text-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[650px] w-[650px] rounded-full bg-lime-300/30 blur-[160px]" />
        <div className="absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-lime-200/40 blur-[170px]" />
        <div className="absolute bottom-[-25%] left-[30%] h-[600px] w-[600px] rounded-full bg-emerald-200/30 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.9) 100%)",
          }}
        />
      </div>

      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.className} hidden lg:block`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.08, 1],
              y: [0, -18, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              delay: element.delay,
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-lime-200 bg-white shadow-lg shadow-lime-100/60">
              <div className="absolute inset-0 rounded-2xl bg-lime-300/30 blur-xl" />
              <Icon className="relative z-10 h-7 w-7 text-lime-600" />
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-lime-600" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-lime-700">
                Tecnología · Diseño · Hardware
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[88px]"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Creamos
              <span className="block text-slate-950">tecnología</span>
              <span className="block bg-gradient-to-r from-lime-500 via-lime-400 to-emerald-500 bg-clip-text text-transparent">
                con propósito.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              En{" "}
              <span className="font-semibold text-slate-950">
                LIMELAB Technologies
              </span>{" "}
              desarrollamos software, creamos sitios web, diseñamos
              invitaciones digitales y damos mantenimiento a PCs Gamer.
              Todo en un solo lugar.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <motion.a
                href="#areas"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-lime-400 hover:text-slate-950 hover:shadow-xl hover:shadow-lime-200"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver áreas de negocio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-lime-300 hover:bg-lime-50 hover:text-slate-950"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Hablemos de tu proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-100 shadow-sm"
                  >
                    <Zap className="h-3 w-3 text-lime-600" />
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-500">
                Software · Web · Hardware · Diseño
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto hidden w-full max-w-[500px] lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
          >
            <motion.div
              className="absolute inset-[-30px] rounded-full border border-lime-300/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-70px] rounded-full border border-slate-200"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative aspect-square overflow-hidden rounded-[40px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/40 blur-[80px]" />

              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="relative z-10 flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Terminal className="h-3 w-3" />
                    LIMELAB
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center font-mono text-sm">
                  <div className="mb-5 text-slate-400">
                    <span className="text-lime-600">$</span>{" "}
                    build something extraordinary
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-purple-600">const</span>{" "}
                      <span className="text-cyan-700">idea</span>{" "}
                      <span className="text-slate-400">=</span>{" "}
                      <span className="text-amber-700">"your business"</span>
                    </div>
                    <div>
                      <span className="text-purple-600">const</span>{" "}
                      <span className="text-cyan-700">solution</span>{" "}
                      <span className="text-slate-400">=</span>{" "}
                      <span className="text-slate-800">LIMELAB</span>
                      <span className="text-slate-400">.</span>
                      <span className="text-blue-700">create</span>
                      <span className="text-slate-400">(</span>
                      <span className="text-cyan-700">idea</span>
                      <span className="text-slate-400">)</span>
                    </div>
                    <div className="pt-3">
                      <span className="text-purple-600">return</span>{" "}
                      <span className="text-lime-600">solution</span>
                      <span className="text-slate-400">;</span>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest">
                      <span className="text-slate-400">Building</span>
                      <span className="text-lime-600">100%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      System online
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">v1.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              className={`group relative p-7 text-center transition-colors duration-300 hover:bg-lime-50/60 md:text-left ${
                index !== 0
                  ? "border-t border-slate-100 md:border-l md:border-t-0"
                  : ""
              }`}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-lime-500">
                  {stat.number}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors duration-300 group-hover:text-lime-500" />
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#areas" className="group flex flex-col items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 transition-colors group-hover:text-lime-600">
              Descubre más
            </span>
            <motion.div
              className="flex h-10 w-6 justify-center rounded-full border border-slate-300 p-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-1.5 w-1 rounded-full bg-lime-500" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
