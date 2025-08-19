import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Target, Users, Leaf, Sparkles } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Buscamos soluciones tecnológicas que marquen la diferencia y transformen la manera de hacer las cosas.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: Heart,
      title: "Compromiso Familiar",
      description: "La confianza, el respeto y el apoyo mutuo son parte de nuestro ADN empresarial y personal.",
      color: "from-pink-400 to-red-500",
      bgColor: "from-pink-50 to-red-50"
    },
    {
      icon: Target,
      title: "Calidad con Propósito",
      description: "Cada producto y servicio tiene como objetivo mejorar la vida de las personas de manera significativa.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Users,
      title: "Empatía y Cercanía",
      description: "Trabajamos escuchando a nuestros clientes como parte de nuestra gran familia extendida.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Leaf,
      title: "Responsabilidad Social",
      description: "Desarrollamos tecnología con impacto positivo en la sociedad y el medio ambiente.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            Nuestros Valores
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Los <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">principios</span> que nos guían
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros valores no son solo palabras en la pared, son la base de cada decisión, 
            cada línea de código y cada relación que construimos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${value.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Animated background elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-lime-50 rounded-3xl border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              💙 Nuestra Promesa
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              En LIMELAB Technologies, cada proyecto es una oportunidad de crear algo extraordinario. 
              Combinamos la calidez de una empresa familiar con la excelencia técnica de un equipo 
              profesional, porque creemos que la tecnología debe servir a las personas, no al revés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;