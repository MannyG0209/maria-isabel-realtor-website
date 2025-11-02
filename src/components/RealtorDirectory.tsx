import React from 'react';
import { MapPin, Star, Users, Award } from 'lucide-react';

interface RealtorDirectoryProps {
  language: 'en' | 'es';
}

const RealtorDirectory: React.FC<RealtorDirectoryProps> = ({ language }) => {
  const content = {
    en: {
      title: "Trusted Realtor Partners",
      subtitle: "Real estate is a global business, and Maria Isabel collaborates with a network of trusted realtors worldwide. Wherever you are, we connect you with experts who know the local market and can guide you with confidence.",
      connectNow: "Connect Now",
      clients: "clients",
      joinNetworkTitle: "Join Our Global Network",
      joinNetworkSubtitle: "Are you a trusted realtor looking to expand your reach? Partner with Creando Tu Riqueza and connect with clients worldwide.",
      becomePartner: "Become a Partner"
    },
    es: {
      title: "Socios Inmobiliarios de Confianza",
      subtitle: "Los bienes raíces son un negocio global, y Maria Isabel colabora con una red de agentes inmobiliarios de confianza en todo el mundo. Donde quiera que estés, te conectamos with expertos que conocen el mercado local y pueden guiarte con confianza.",
      connectNow: "Conectar Ahora",
      clients: "clientes",
      joinNetworkTitle: "Únete a Nuestra Red Global",
      joinNetworkSubtitle: "¿Eres un agente inmobiliario de confianza buscando expandir tu alcance? Asóciate con Creando Tu Riqueza y conéctate con clientes en todo el mundo.",
      becomePartner: "Convertirse en Socio"
    }
  };

  const t = content[language];

  const realtors = [
    {
      id: 1,
      name: "Landrada Proyectos Urbanizados",
      specialty: {
        en: "Inversion con conciencia",
        es: "Inversion con conciencia"
      },
      city: "Cancun, Mexico",
      image: "/22502332-bed8-41a5-86a3-87a4d21ce877.jpeg",
      rating: 4.9,
      clients: "200+"
    },
    {
      id: 2,
      name: "Home Key Realty LLC",
      specialty: {
        en: "Real Estate Agency",
        es: "Agencia Inmobiliaria"
      },
      city: "New Jersey, USA",
      image: "/image copy copy copy copy copy copy copy copy copy.png",
      rating: 4.8,
      clients: "150+"
    },
    {
      id: 3,
      name: "Rose & CO.",
      specialty: {
        en: "Residential Real Estate",
        es: "Bienes Raíces Residenciales"
      },
      city: "Mexico",
      image: "/image copy copy copy copy copy copy copy copy copy copy.png",
      rating: 5.0,
      clients: "300+"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Realtor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realtors.map((realtor) => (
            <div key={realtor.id} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className={realtor.id === 1
                  ? "w-24 h-24 mx-auto rounded-full overflow-hidden"
                  : "w-48 h-24 mx-auto rounded-xl overflow-hidden"}>
                  <img
                    src={realtor.image}
                    alt={realtor.name}
                    className={realtor.id === 1
                      ? "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      : "w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"}
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-2">
                  <Award className="w-4 h-4 text-blue-900" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {realtor.name}
                </h3>
                
                <p className="text-yellow-600 font-semibold mb-2">
                  {realtor.specialty[language]}
                </p>
                
                <div className="flex items-center justify-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{realtor.city}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{realtor.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm">{realtor.clients} {t.clients}</span>
                  </div>
                </div>

                {/* Connect Button */}
                <a
                  href="https://wa.me/13472766213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Network CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              {t.joinNetworkTitle}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.joinNetworkSubtitle}
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.becomePartner}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtorDirectory;