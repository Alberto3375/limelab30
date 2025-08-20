import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, ShoppingCart, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Clients = () => {
  const [activeClient, setActiveClient] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      id: 1,
      name: "Farmacia Dr. Bee",
      project: "Sistema Web Administrable",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "Desarrollé un sistema web administrable completo para la gestión de productos, con registro de usuarios, autenticación segura y control de inventario en tiempo real. La solución mejoró la eficiencia operativa en un 40%.",
      icon: <Database className="w-6 h-6" />,
      bgColor: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: "/img/farmacia-drbee.png",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Panel administrativo", "Gestión de inventario", "Reportes automáticos", "Interfaz responsive"]
    },
    {
      id: 2,
      name: "Yomonalex",
      project: "E-commerce de Muebles",
      technologies: ["Laravel", "MySQL", "TailwindCSS", "AlpineJS", "Livewire"],
      description:
        "E-commerce especializado en muebles de acero inoxidable con carrito de compras, procesamiento de pagos y panel de administración. Implementación de estrategias SEO que aumentaron el tráfico orgánico en un 65%.",
      icon: <ShoppingCart className="w-6 h-6" />,
      bgColor: "from-emerald-500/10 to-teal-500/10",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      image: "/img/yomonalex.png",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Checkout optimizado", "Sistema de recomendaciones", "Panel de administración", "Optimización SEO"]
    },
    {
      id: 3,
      name: "TechSolutions Inc.",
      project: "Plataforma SaaS",
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
      description:
        "Plataforma SaaS para gestión de proyectos con funcionalidades de colaboración en tiempo real, analytics integrado y sistema de notificaciones. Arquitectura escalable que soporta más de 10,000 usuarios concurrentes.",
      icon: <Database className="w-6 h-6" />,
      bgColor: "from-purple-500/10 to-fuchsia-500/10",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      image: "/img/techsolutions.png",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Tiempo real", "Escalabilidad", "Dashboard analítico", "Colaboración en equipo"]
    }
  ];

  const nextClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100/50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 -skew-y-3 -translate-y-32"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales innovadoras desarrolladas con las mejores tecnologías y prácticas de la industria.
          </p>
        </motion.div>

        {/* Navegación para móviles */}
        <div className="flex justify-center mb-8 md:hidden">
          <button onClick={prevClient} className="p-2 mr-4 rounded-full bg-white shadow-md">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={nextClient} className="p-2 rounded-full bg-white shadow-md">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className={`rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${index !== currentIndex && 'hidden md:block'} ${index === currentIndex ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Imagen con overlay */}
              <div className="relative overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="mb-2 flex justify-center">
                      <div className={`p-3 rounded-full ${client.bgColor} backdrop-blur-sm`}>
                        {React.cloneElement(client.icon, { className: `w-8 h-8 ${client.textColor}` })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{client.name}</h3>
                    <p className="text-gray-300">{client.project}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex space-x-2">
                    <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    Ver detalles
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{client.description}</p>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 mb-2">Características principales:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {client.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${client.textColor.replace('text', 'bg')}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full ${client.textColor} ${client.bgColor} border ${client.borderColor} backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <button className={`flex items-center ${client.textColor} text-sm font-medium hover:underline`}>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Ver proyecto
                    </button>
                    <button className={`flex items-center ${client.textColor} text-sm font-medium hover:underline`}>
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">2023</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicadores para móvil */}
        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
