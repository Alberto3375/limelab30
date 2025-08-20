import React from "react";
import { motion } from "framer-motion";
import { Database, ShoppingCart } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Farmacia Dr. Bee",
      project: "Sistema Web Administrable",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "Desarrollé un sistema web administrable para la gestión de productos, con registro de usuarios, login seguro y manejo de inventario.",
      icon: <Database className="w-7 h-7 text-blue-600" />,
      bgColor: "from-blue-100/40 to-blue-200/30",
      image: "/img/farmacia-drbee.png",
    },
    {
      id: 2,
      name: "Yomonalex",
      project: "E-commerce de Muebles",
      technologies: ["Laravel", "MySQL", "TailwindCSS"],
      description:
        "Implementé un e-commerce para muebles de acero inoxidable con login, carrito de compras y gestión de pedidos en tiempo real.",
      icon: <ShoppingCart className="w-7 h-7 text-green-600" />,
      bgColor: "from-green-100/40 to-lime-200/30",
      image: "/img/yomonalex.png",
    },
  ];

  return (
    <section
      id="clientes"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Experiencia con Clientes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className={`rounded-3xl shadow-lg p-6 bg-gradient-to-br ${client.bgColor} border border-gray-200/30 backdrop-blur-md hover:shadow-2xl transition-all`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Imagen de portada */}
              <div className="mb-6 overflow-hidden rounded-2xl shadow-md relative">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {client.project}
                </span>
              </div>

              {/* Encabezado con icono */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-2xl shadow-md flex items-center justify-center">
                  {client.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {client.name}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {client.description}
              </p>

              {/* Tecnologías */}
              <div>
                <h5 className="font-semibold mb-3 text-gray-800">
                  Tecnologías utilizadas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {client.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-white to-gray-50 text-gray-800 border border-gray-200 rounded-full text-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
