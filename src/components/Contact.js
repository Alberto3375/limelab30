import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, errorMessage: '' });

 try {
  const response = await fetch('https://limelab.onrender.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        errorMessage: ''
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: error.message || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mendezalberto295@gmail.com",
      description: "Respuesta en 24 horas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 (33) 3225-0942",
      description: "Lun - Vie, 9:00 - 18:00",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Guadalajara, Jalisco",
      description: "También trabajamos remotamente",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            <MessageCircle className="w-4 h-4" />
            Hablemos
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Listo para <span className="bg-gradient-to-r from-lime-600 to-green-500 bg-clip-text text-transparent">innovar</span> juntos?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a transformar 
            tus ideas en soluciones tecnológicas extraordinarias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
 <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Múltiples formas de conectar
              </h3>
              <p className="text-gray-600 mb-8">
                Elige la forma que más te convenga para iniciar una conversación. 
                Estamos aquí para escucharte y ayudarte a hacer realidad tus ideas.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{info.title}</h4>
                    <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                    <p className="text-gray-500 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              className="p-6 bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl border border-lime-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-lime-600" />
                <h4 className="font-bold text-gray-800">Tiempo de respuesta</h4>
              </div>
              <p className="text-gray-600">
                Nos comprometemos a responder todas las consultas en un máximo de 24 horas. 
                ¡Tu proyecto es importante para nosotros!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {status.error && (
              <motion.div
                className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{status.errorMessage}</p>
                </div>
              </motion.div>
            )}

            {status.submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos muy pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
