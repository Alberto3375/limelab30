import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Heart, Rocket } from "lucide-react";

const Hero = () => {
  const floatingElements = [
    { icon: Code, delay: 0.2, x: 100, y: 50 },
    { icon: Heart, delay: 0.4, x: -80, y: 80 },
    { icon: Sparkles, delay: 0.6, x: 120, y: -60 },
    { icon: Rocket, delay: 0.8, x: -100, y: -40 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-lime-50"
    >
      {/* Fondo animado con blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-lime-200/40 to-purple-200/40 blur-3xl opacity-50 animate-pulse"></div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-lime-300 drop-shadow-[0_0_15px_rgba(132,204,22,0.5)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.4,
              scale: 1,
              x: [0, element.x, 0],
              y: [0, element.y, 0],
            }}
            transition={{
              delay: element.delay,
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            <Icon className="w-20 h-20" />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur-md rounded-full text-lime-700 font-semibold mb-8 shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Heart className="w-4 h-4 text-red-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-lime-500 bg-clip-text text-transparent">
              LIMELAB
            </span>
            <br />
            <span className="text-gray-900">Technologies</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Desarrollamos soluciones que transforman vidas con{" "}
            <span className="text-lime-600 font-semibold">innovación</span>,{" "}
            <span className="text-blue-600 font-semibold">empatía</span> y el{" "}
            <span className="text-purple-600 font-semibold">compromiso</span>{" "}
            de una empresa familiar.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-lime-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestros servicios
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-gray-300 text-gray-800 font-semibold rounded-2xl bg-white/60 backdrop-blur-sm hover:border-lime-500 hover:text-lime-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nuestra historia
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
          
            
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <div
                  className={`text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
