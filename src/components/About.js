import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star, Users, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alberto Mendez",
      role: "Fundador & Desarrollador",
      description:
        "Arquitecto tecnológico que convierte ideas en soluciones prácticas y funcionales.",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Primer Proyecto",
      description: "Lanzamos nuestro primer desarrollo con éxito.",
    },
    {
      year: "2024",
      title: "Consolidación",
      description: "Segundo proyecto vendido, afianzando la confianza de los clientes.",
    },
    {
      year: "2025",
      title: "Nuestro presente",
      description: "Más de 2 años creando soluciones tecnológicas con pasión y dedicación.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-lime-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Sección de equipo */}
        <div className="mb-24">
          <motion.h3
            className="text-4xl font-extrabold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Conoce a nuestro equipo
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white/60 backdrop-blur-md shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-lime-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Línea de tiempo */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            Nuestra historia
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-lime-500 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-[280px] bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                    <div className="text-xl font-bold text-blue-600 mb-1">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Crear soluciones tecnológicas que generen impacto real en la vida
              de las personas, integrando innovación, empatía y compromiso
              humano.
            </p>
          </motion.div>

          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-lime-50 to-green-100 border border-lime-200/50 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-lime-500 to-green-600 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Convertirnos en un referente en Latinoamérica como una empresa de
              tecnología cercana, confiable e innovadora que siempre pone a las
              personas en primer lugar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
