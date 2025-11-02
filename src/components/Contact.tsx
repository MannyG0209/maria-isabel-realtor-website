import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'es';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    en: {
      title: "Let's Get Started",
      subtitle: "Ready to buy, sell, or invest in property? Maria Isabel is here to guide you every step of the way. Your wealth creation journey begins with a simple conversation.",
      getInTouch: "Get in Touch",
      whatsapp: "WhatsApp",
      instantChat: "Instant chat available",
      email: "Email",
      phone: "Phone",
      officeHours: "Office Hours",
      monFri: "Mon-Fri: 9AM-7PM",
      satSun: "Sat-Sun: 10AM-4PM",
      whyChoose: "Why Choose Maria Isabel?",
      experience: "15+ years of experience",
      globalNetwork: "Global property network",
      support: "24/7 client support",
      multilingual: "Multilingual services",
      startJourney: "Start Your Journey Today",
      fullName: "Full Name",
      fullNamePlaceholder: "Your full name",
      emailAddress: "Email Address",
      emailPlaceholder: "your.email@example.com",
      phoneNumber: "Phone Number",
      phonePlaceholder: "+1 (555) 123-4567",
      message: "Message",
      messagePlaceholder: "Tell us about your real estate needs...",
      submitButton: "Start Your Journey Today",
      successMessage: "Thank you for your message! Maria Isabel will contact you soon."
    },
    es: {
      title: "Comencemos",
      subtitle: "¿Listo para comprar, vender o invertir en propiedades? Maria Isabel está aquí para guiarte en cada paso del camino. Tu viaje de creación de riqueza comienza con una simple conversación.",
      getInTouch: "Ponte en Contacto",
      whatsapp: "WhatsApp",
      instantChat: "Chat instantáneo disponible",
      email: "Correo Electrónico",
      phone: "Teléfono",
      officeHours: "Horario de Oficina",
      monFri: "Lun-Vie: 9AM-7PM",
      satSun: "Sáb-Dom: 10AM-4PM",
      whyChoose: "¿Por qué elegir a Maria Isabel?",
      experience: "15+ años de experiencia",
      globalNetwork: "Red global de propiedades",
      support: "Soporte al cliente 24/7",
      multilingual: "Servicios multilingües",
      startJourney: "Comienza Tu Viaje Hoy",
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Tu nombre completo",
      emailAddress: "Dirección de Correo",
      emailPlaceholder: "tu.correo@ejemplo.com",
      phoneNumber: "Número de Teléfono",
      phonePlaceholder: "+1 (555) 123-4567",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tus necesidades inmobiliarias...",
      submitButton: "Comienza Tu Viaje Hoy",
      successMessage: "¡Gracias por tu mensaje! Maria Isabel se pondrá en contacto contigo pronto."
    }
  };

  const t = content[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert(t.successMessage);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">{t.getInTouch}</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/13472766213"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:scale-105 border border-green-200"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-700">{t.whatsapp}</div>
                  <div className="text-sm text-green-600">{t.instantChat}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Mariaisabel@creandoturiqueza.com"
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 border border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-700">{t.email}</div>
                  <div className="text-sm text-blue-600">Mariaisabel@creandoturiqueza.com</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/13472766213"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 border border-yellow-200"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <div className="font-semibold text-yellow-700">{t.phone}</div>
                  <div className="text-sm text-yellow-600">+1 (347) 276-6213</div>
                </div>
              </a>

              {/* Office Hours */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-700">{t.officeHours}</div>
                  <div className="text-sm text-gray-600">{t.monFri}</div>
                  <div className="text-sm text-gray-600">{t.satSun}</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-4">{t.whyChoose}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {t.experience}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {t.globalNetwork}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {t.support}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {t.multilingual}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">{t.startJourney}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder={t.phonePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    {t.submitButton}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;