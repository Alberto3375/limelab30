import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Brain, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo de Software a Medida",
      description: "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Desarrollamos apps nativas e híbridas que conectan tu marca con tus usuarios en cualquier momento y lugar.",
      color: "from-lime-500 to-green-600",
      bgColor: "from-lime-50 to-green-100"
    },
    {
      icon: Globe,
      title: "Soluciones Web",
      description: "Sitios web modernos, responsivos y optimizados que impulsan tu presencia digital y generan resultados.",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-100"
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Implementamos IA y análisis de datos para automatizar procesos y generar insights valiosos para tu empresa.",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-100"
    },
    {
      icon: Users,
      title: "Consultoría Tecnológica",
      description: "Te acompañamos en la transformación digital de tu negocio con estrategias tecnológicas efectivas.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 rounded-full text-lime-700 font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Code className="w-4 h-4" />
            Nuestros Servicios
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Soluciones que <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">transforman</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios tecnológicos integrales diseñados para impulsar el crecimiento 
            y la innovación en tu empresa, siempre con el toque humano que nos caracteriza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-gray-700 font-medium group-hover:text-gray-900 transition-colors"
                    whileHover={{ x: 5 }}
                  >
              
                  </motion.div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-lime-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos nuestros servicios
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
