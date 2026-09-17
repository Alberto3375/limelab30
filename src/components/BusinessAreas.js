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
              "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(
