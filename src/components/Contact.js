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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Error al enviar el mensaje"
        );
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        errorMessage: "",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
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
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Green glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[130px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-lime-200/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2">
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

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Cuéntanos sobre tu proyecto, necesidad o idea. Diseñamos
            soluciones tecnológicas pensadas para resolver problemas reales y
            generar resultados.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* =================================================
              LEFT
          ================================================= */}

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
                Podemos ayudarte a convertirla en una solución clara,
                funcional y escalable.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-200 bg-lime-50 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-slate-950">
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
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-xl hover:shadow-lime-100/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={info.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-xl hover:shadow-lime-100/40"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Response time */}
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
                    Procuramos responder cada solicitud en un máximo de
                    24 horas.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              {/* Form glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-lime-300/10 blur-[80px]" />

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

                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-lime-50 sm:flex">
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
                      {/* Name + Email */}
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

                      {/* Company */}
                      <div>
                        <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                          Empresa
                          <span className="ml-1 text-slate-300">
                            Opcional
                          </span>
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

                      {/* Message */}
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

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status.submitting}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 hover:bg-lime-400 hover:text-slate-950 hover:shadow-xl hover:shadow-lime-200 disabled:cursor-not-allowed disabled:opacity-60"
                        whileHover={
                          !status.submitting
                            ? { y: -2 }
                            : undefined
                        }
                        whileTap={
                          !status.submitting
                            ? { scale: 0.98 }
                            : undefined
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
                        Al enviar este formulario aceptas que podamos
                        contactarte para dar seguimiento a tu solicitud.
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
```

---

# 2. `Clients.jsx`

Aquí hice algo más importante: que realmente se sienta como **portafolio**, no solamente como “clientes”.

Ahora tienes:

* tarjetas premium;
* imagen grande;
* número de proyecto;
* tecnologías;
* indicadores;
* modal mucho más elegante;
* `#clients` compatible con tu Header;
* fondo blanco;
* verde limón;
* mejor responsive;
* sin colores azul/verde/rosa mezclados.

```jsx
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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
        {/* =====================================================
            HEADER
        ===================================================== */}

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
              <span className="text-slate-300">
                hablan por nosotros.
              </span>
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

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <div className="grid gap-7 lg:grid-cols-2">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <motion.article
                key={client.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-lime-200 hover:shadow-2xl hover:shadow-slate-200/70"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* IMAGE */}
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

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-black text-white backdrop-blur-md">
                    {client.number}
                  </div>

                  {/* Category */}
                  <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {client.category}
                  </div>

                  {/* Bottom */}
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

                {/* CONTENT */}
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

                  {/* Technologies */}
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

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          className="mt-12 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Cada proyecto comienza con una necesidad diferente. Nuestro
            trabajo consiste en convertirla en una solución tecnológica clara,
            funcional y preparada para crecer.
          </p>
        </motion.div>
      </div>

      {/* =======================================================
          MODAL
      ======================================================= */}

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
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedClient(null)}
                aria-label="Cerrar"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:bg-lime-400 hover:text-slate-950"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Hero */}
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

              {/* Modal content */}
              <div className="p-6 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                  {/* Description */}
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

                  {/* Features */}
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
```

---

# 3. `About.jsx`

Aquí lo cambié bastante para que no parezca una sección de “empresa genérica”.

La estructura ahora es:

**Quiénes somos → fundador → trayectoria → misión/visión → filosofía.**

Y todo mantiene blanco + lima + gris oscuro.

```jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Star,
  Code2,
  Heart,
  ArrowUpRight,
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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
        {/* =====================================================
            INTRO
        ===================================================== */}

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
              <span className="text-slate-300">
                una visión humana.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-500 sm:text-lg">
              LIMELAB nace con una idea sencilla: la tecnología debe resolver
              problemas reales, ser fácil de entender y generar valor para
              las personas que la utilizan.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FOUNDER
        ===================================================== */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Profile */}
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
                <span className="text-4xl font-black text-slate-950">
                  A
                </span>
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

          {/* Philosophy */}
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
                  solución y construimos tecnología alrededor de esa
                  necesidad.
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

        {/* =====================================================
            TIMELINE
        ===================================================== */}

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

            <span className="text-xs font-bold text-slate-400">
              2023 — 2026
            </span>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-slate-200 md:left-0 md:right-0 md:top-[17px] md:h-px md:w-auto" />

            <div className="grid gap-8 md:grid-cols-4 md:gap-5">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative pl-10 md:pl-0 md:pt-10"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Dot */}
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

        {/* =====================================================
            MISSION / VISION
        ===================================================== */}

        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          {/* Mission */}
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
                <span className="text-lime-400">
                  que genere impacto.
                </span>
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

          {/* Vision */}
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
                <span className="text-lime-600">
                  cercana y confiable.
                </span>
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

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <motion.div
          className="mt-20 flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-lime-400" />

            <Sparkles className="h-4 w-4 text-lime-500" />

            <span className="h-px w-10 bg-lime-400" />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 sm:text-sm">
            Innovar · Construir · Transformar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
