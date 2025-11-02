import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'es';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      brandSubtitle: "Maria Isabel Real Estate",
      description: "Building wealth through real estate worldwide. Maria Isabel and her global network of trusted partners help you turn property dreams into reality.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Maria Isabel",
      listings: "Property Listings",
      contact: "Contact",
      partnerNetwork: "Partner Network",
      contactInfo: "Contact Info",
      whatsappChat: "WhatsApp Chat",
      servingClients: "Serving Clients Worldwide",
      allRightsReserved: "All Rights Reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      quote: "Real estate is not just about property—it's about creating your legacy."
    },
    es: {
      brandSubtitle: "Bienes Raíces Maria Isabel",
      description: "Construyendo riqueza a través de bienes raíces mundialmente. Maria Isabel y su red global de socios de confianza te ayudan a convertir los sueños de propiedades en realidad.",
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      about: "Acerca de Maria Isabel",
      listings: "Propiedades",
      contact: "Contacto",
      partnerNetwork: "Red de Socios",
      contactInfo: "Información de Contacto",
      whatsappChat: "Chat de WhatsApp",
      servingClients: "Sirviendo Clientes Mundialmente",
      allRightsReserved: "Todos los Derechos Reservados",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      cookiePolicy: "Política de Cookies",
      quote: "Los bienes raíces no se tratan solo de propiedades—se trata de crear tu legado."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/578e6939-73e0-438d-91c2-b2f841019675.jpeg" 
                alt="Maria Isabel Inversiones Logo" 
                className="w-20 h-16 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-2xl font-bold">Creando Tu Riqueza</h3>
                <p className="text-blue-200">{t.brandSubtitle}</p>
              </div>
            </div>
            
            <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
              {t.description}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16zDTTXw7r/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.instagram.com/mariaisabel.luis.3?igsh=bjZ3emFna2tka3g2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              
              <a
                href="https://wa.me/13472766213"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#listings" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  {t.listings}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  {t.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  {t.partnerNetwork}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:Mariaisabel@creandoturiqueza.com"
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Mariaisabel@creandoturiqueza.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-blue-200">+1 (347) 276-6213</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/13472766213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  {t.whatsappChat}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-blue-200">{t.servingClients}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 Creando Tu Riqueza | {t.allRightsReserved}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                {t.privacyPolicy}
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                {t.termsOfService}
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                {t.cookiePolicy}
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-blue-800">
            <p className="text-blue-300 text-sm italic">
              {language === 'en' 
                ? '"Real estate is the beginning, vision is the path, wealth is the destination." - Maria Isabel'
                : '"Los bienes raíces son el comienzo, la visión es el camino, la riqueza es el destino." - Maria Isabel'
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;