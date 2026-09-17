import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      errorMessage: "",
    });

    try {
      const response = await fetch(
        "https://limelab.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        errorMessage: "",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage:
          error.message ||
          "Hubo un error al enviar el mensaje. Por favor intenta nuevamente.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      number: "01",
      title: "Correo electrónico",
      value: "mendezalberto295@gmail.com",
      description: "Respuesta en un máximo de 24 horas",
      href: "mailto:mendezalberto295@gmail.com",
    },
    {
      icon: Phone,
      number: "02",
      title: "Teléfono",
      value: "+52 (33) 3225-0942",
      description: "Lunes a viernes · 9:00 — 18:00",
      href: "tel:+523332250942",
    },
    {
      icon: MapPin,
      number: "03",
      title: "Ubicación",
      value: "Guadalajara, Jalisco",
      description: "Trabajamos presencial y remotamente",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lime-300/20 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-lime-200/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-lime-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-700">
              Hablemos
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hagamos algo
            <span className="relative ml-2 inline-block text-lime-500">
              increíble.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-lime-300/60" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Cuéntanos sobre tu proyecto, necesidad o idea. Diseñamos soluciones
            tecnológicas pensadas para resolver problemas reales y generar
            resultados.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
                Conecta con nosotros
              </p>

              <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Estamos listos para
                <br />
                escuchar tu idea.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                No importa si tienes un proyecto definido o apenas una idea.
                Podemos ayudarte a convertirla en una solución clara, funcional
                y escalable.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-200 bg-lime-50 transition-all duration-300 group-hover:bg-lime-400">
                      <Icon className="h-5 w-5 text-lime-600 transition-colors duration-300 group-hover:text-slate-950" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[9px] font-black text-lime-600">
                          {info.number}
                        </span>
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                          {info.title}
                        </p>
                      </div>
                      <p className="truncate text-sm font-bold text-slate-800">
                        {info.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {info.description}
                      </p>
                    </div>

                    {info.href && (
                      <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-600" />
                    )}
                  </>
                );

                return info.href ? (
                  <a
                    key={info.title}
                    href={info.href}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-xl hover:shadow-lime-100/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={info.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-xl hover:shadow-lime-100/50"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <motion.div
              className="mt-5 overflow-hidden rounded-2xl border border-lime-200 bg-gradient-to-br from-lime-50 to-white p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400">
                  <Clock className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">
                    Tiempo de respuesta
                  </h4>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Procuramos responder cada solicitud en un máximo de 24
                    horas.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-lime-300/30 blur-[80px]" />

              <div className="relative">
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-600">
                        Contacto
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-slate-900">
                        Cuéntanos tu proyecto
                      </h3>
                    </div>
                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-lime-100 sm:flex">
                      <MessageCircle className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {status.error && (
                    <motion.div
                      className="mb-6 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-red-700"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">
                          No pudimos enviar tu mensaje
                        </p>
                        <p className="mt-1 text-xs leading-5 text-red-600">
                          {status.errorMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {status.submitted ? (
                    <motion.div
                      key="success"
                      className="flex min-h-[480px] flex-col items-center justify-center text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <motion.div
                        className="relative mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-lime-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          delay: 0.1,
                        }}
                      >
                        <div className="absolute inset-0 animate-ping rounded-full bg-lime-200 opacity-50" />
                        <CheckCircle className="relative h-10 w-10 text-lime-600" />
                      </motion.div>

                      <h3 className="text-2xl font-black text-slate-900">
                        ¡Mensaje enviado!
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                        Recibimos tu mensaje correctamente. Nos pondremos en
                        contacto contigo lo antes posible.
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setStatus({
                            submitting: false,
                            submitted: false,
                            error: false,
                            errorMessage: "",
                          })
                        }
                        className="mt-7 rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-600 transition-colors hover:border-lime-300 hover:text-lime-700"
                      >
                        Enviar otro mensaje
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-100"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-100"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                          Empresa
                          <span className="ml-1 text-slate-300">Opcional</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-100"
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                            Mensaje *
                          </label>
                          <span className="text-[9px] text-slate-300">
                            Cuéntanos todo
                          </span>
                        </div>

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="¿Qué necesitas desarrollar, automatizar o mejorar?"
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-100"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status.submitting}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 hover:bg-lime-400 hover:text-slate-950 hover:shadow-xl hover:shadow-lime-200 disabled:cursor-not-allowed disabled:opacity-60"
                        whileHover={
                          !status.submitting ? { y: -2 } : undefined
                        }
                        whileTap={
                          !status.submitting ? { scale: 0.98 } : undefined
                        }
                      >
                        {status.submitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Enviando mensaje...
                          </>
                        ) : (
                          <>
                            Enviar mensaje
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-[10px] leading-5 text-slate-400">
                        Al enviar este formulario aceptas que podamos contactarte
                        para dar seguimiento a tu solicitud.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
