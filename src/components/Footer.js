import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579192204687", color: "hover:text-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/limelab30", color: "hover:text-pink-500" }
];
  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Valores", href: "#values" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" }
  ];

  const services = [
    "Desarrollo de Software",
    "Aplicaciones Móviles",
    "Soluciones Web",
    "Inteligencia Artificial",
    "Consultoría Tecnológica"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                  LIMELAB
                </h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Innovamos con el corazón de una familia, creando soluciones tecnológicas 
              que transforman ideas en realidades extraordinarias.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:bg-gray-600`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-lime-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-lime-400 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-lime-400">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <span className="text-gray-300 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                    <span className="w-1 h-1 bg-lime-400 rounded-full"></span>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-lime-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-lime-400" />
                <span>mendezalberto295@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-lime-400" />
                <span>+52 (33) 3225-0942</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-lime-400" />
                <span>Guadalajara, Jalisco</span>
              </div>
            </div>

            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-xl border border-lime-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-300">
                🚀 Innovación hecha en familia
                <br />
                💙 #LIMELAB
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2025 LIMELAB Technologies. Hecho con 
            <Heart className="w-4 h-4 text-red-400" /> 
            en México.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-lime-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
