import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShoppingCart, X } from 'lucide-react';

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: "Farmacia Dr. Bee",
      project: "Sistema Web Administrable",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "Desarrollé un sistema web administrable para la gestión de productos, con registro de usuarios, login seguro y manejo de inventario. La solución mejoró la eficiencia operativa en un 40% y redujo los errores de inventario en un 25%.",
      icon: <Database className="w-6 h-6" />,
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: "/img/farmacia-drbee.png",
      features: ["Panel administrativo", "Gestión de inventario", "Reportes automáticos", "Interfaz responsive", "Backups automáticos", "Sistema de roles"]
    },
    {
      id: 2,
      name: "Yomonalex",
      project: "E-commerce de Muebles",
      technologies: ["Laravel", "MySQL", "TailwindCSS"],
      description:
        "Implementé un e-commerce para muebles de acero inoxidable con login, carrito de compras y gestión de pedidos en tiempo real. La plataforma incrementó las ventas online en un 60% y mejoró la experiencia de usuario significativamente.",
      icon: <ShoppingCart className="w-6 h-6" />,
      bgColor: "from-green-50 to-lime-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      image: "/img/yomonalex.png",
      features: ["Checkout optimizado", "Sistema de recomendaciones", "Panel de administración", "Optimización SEO", "Pasarela de pagos", "Seguimiento de pedidos"]
    },
  ];

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5YzlkYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==";
  };

  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-green-500/5 -skew-y-3 -translate-y-32"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Experiencia con Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales innovadoras desarrolladas con las mejores tecnologías y prácticas de la industria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className={`rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border ${client.borderColor} flex flex-col h-full`}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Imagen con overlay - Mejorada para desktop */}
              <div className="relative overflow-hidden group h-72 lg:h-80 cursor-pointer" onClick={() => setSelectedClient(client)}>
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver detalles
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${client.bgColor} flex-shrink-0`}>
                    {React.cloneElement(client.icon, { className: `w-6 h-6 ${client.textColor}` })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
                    <p className="text-gray-600">{client.project}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3 flex-grow">{client.description}</p>

                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Tecnologías utilizadas:</h5>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-white text-gray-800 border ${client.borderColor} rounded-full text-sm shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles del proyecto - Mejorado para desktop */}
        <AnimatePresence>
          {selectedClient && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedClient(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto ${selectedClient.bgColor} border ${selectedClient.borderColor}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="h-96 overflow-hidden">
                  <img
                    src={selectedClient.image}
                    alt={selectedClient.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-white shadow-md flex-shrink-0`}>
                      {React.cloneElement(selectedClient.icon, { className: `w-8 h-8 ${selectedClient.textColor}` })}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedClient.name}</h3>
                      <p className="text-lg text-gray-600">{selectedClient.project}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-gray-800">Descripción del proyecto</h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">{selectedClient.description}</p>

                      <h4 className="font-semibold text-lg mb-4 text-gray-800">Tecnologías utilizadas</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedClient.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 bg-white text-gray-800 border ${selectedClient.borderColor} rounded-full text-sm shadow-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-gray-800">Características principales</h4>
                      <ul className="space-y-3">
                        {selectedClient.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${selectedClient.textColor.replace('text', 'bg')}`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Clients;
