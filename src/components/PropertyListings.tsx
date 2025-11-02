import React from 'react';
import { MapPin, Bed, Bath, Square, Calendar, ArrowRight } from 'lucide-react';

interface PropertyListingsProps {
  language: 'en' | 'es';
  onShowAllListings: () => void;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ language, onShowAllListings }) => {
  const content = {
    en: {
      title: "Featured Properties",
      subtitle: "Explore our curated listings of homes, condos, and investment properties around the world. Whether you're buying, selling, or renting, we make the process simple and stress-free.",
      featured: "Featured",
      bed: "bed",
      bath: "bath",
      viewAll: "View All Properties"
    },
    es: {
      title: "Propiedades Destacadas",
      subtitle: "Explora nuestras propiedades seleccionadas de casas, condominios y propiedades de inversión alrededor del mundo. Ya sea que compres, vendas o rentes, hacemos el proceso simple y sin estrés.",
      featured: "Destacada",
      bed: "rec",
      bath: "baño",
      viewAll: "Ver Todas las Propiedades"
    }
  };

  const t = content[language];

  const properties = [
    {
      id: 1,
      title: {
        en: "31 Florida St, Elizabeth NJ",
        es: "31 Florida St, Elizabeth NJ"
      },
      location: "Elizabeth NJ, USA",
      price: "$999,999",
      image: "/970066c6-4b41-4aa6-bce0-82d34db969cc.jpeg",
      beds: 7,
      baths: 5,
      sqft: "2,100 sq. ft.",
      highlights: {
        en: "First floor commercial space, Second floor two duplex.",
        es: "Espacio comercial en primer piso, segundo piso dos dúplex."
      },
      cta: {
        en: "Schedule a Virtual Tour",
        es: "Programar Tour Virtual"
      }
    },
    {
      id: 3,
      title: {
        en: "Chaka Lotes Semi-Urbanizados",
        es: "Chaka Lotes Semi-Urbanizados"
      },
      location: "Puerto Progreso Yucatan, Mexico",
      price: "MXN 540,000",
      image: "/image copy copy copy.png",
      beds: 4,
      baths: 3,
      sqft: "4,000 sq. ft.",
      highlights: {
        en: "Gated community, Clubhouse, Swimming pool, Pet Park, Soccer field, and Children Park",
        es: "Comunidad privada, Casa Club, Piscina, Parque para Mascotas, Cancha de Fútbol y Parque Infantil"
      },
      cta: {
        en: "Book a Private Viewing",
        es: "Reservar Visita Privada"
      }
    },
    {
      id: 4,
      title: {
        en: "Xeelenja Lotes Semi-Urbanizados",
        es: "Xeelenja Lotes Semi-Urbanizados"
      },
      location: "Cancún, Mexico",
      price: "MXN 540,000",
      image: "/1536b7bd-ef15-4024-89e3-80cb1945307c.jpeg",
      beds: 4,
      baths: 3,
      sqft: "1,000 sq. ft.",
      highlights: {
        en: "Gated community, Clubhouse, Swimming pool, Pet Park, Soccer field, and Children Park",
        es: "Comunidad privada, Casa Club, Piscina, Parque para Mascotas, Cancha de Fútbol y Parque Infantil"
      },
      cta: {
        en: "Book a Private Viewing",
        es: "Reservar Visita Privada"
      }
    },
    {
      id: 5,
      title: {
        en: "Amaia Lotes Semi-Urbanizados",
        es: "Amaia Lotes Semi-Urbanizados"
      },
      location: "Tulum, Mexico",
      price: "MXN 800,000",
      image: "/image copy copy copy copy copy.png",
      beds: 5,
      baths: 4,
      sqft: "5,000 sq. ft.",
      highlights: {
        en: "Gated community, Clubhouse, Swimming pool, Pet Park, Soccer field, and Children Park",
        es: "Comunidad privada, Casa club, Piscina, Parque para mascotas, Campo de fútbol, Parque infantil"
      },
      cta: {
        en: "Schedule a Virtual Tour",
        es: "Programar Tour Virtual"
      }
    },
    {
      id: 6,
      title: {
        en: "DAMAC Riverside Views",
        es: "DAMAC Riverside Views"
      },
      location: "Dubai Investment Park",
      price: "$200,000",
      image: "/image copy copy copy copy copy copy.png",
      beds: 3,
      baths: 3,
      sqft: "2,800 sq. ft.",
      highlights: {
        en: "Clubhouse & Retail, Malibu Cove, Amphitheatre/Lawn, Kidz Adventure Land, Floating Cinema, Hydroponic Farm, Games Zone, Wall Climbing, Callisthenics Stations, Live Cooking Classes/BBQ, Essential Oils Lake, Portofino Restaurant, Floating Opera, Opal Chess Haven, Island Restaurant",
        es: "Casa Club y Retail, Malibu Cove, Anfiteatro/Césped, Kidz Adventure Land, Cine Flotante, Granja Hidropónica, Zona de Juegos, Escalada en Pared, Estaciones de Calistenia, Clases de Cocina en Vivo/BBQ, Lago de Aceites Esenciales, Restaurante Portofino, Ópera Flotante, Opal Chess Haven, Restaurante Isla"
      },
      cta: {
        en: "Book a Private Viewing",
        es: "Reservar Visita Privada"
      }
    },
    {
      id: 7,
      title: {
        en: "Kaban Lotes Ecologicos Semi-Urbanizados",
        es: "Kaban Lotes Ecologicos Semi-Urbanizados"
      },
      location: "Ruta Verde Cancun-Tulum, Mexico",
      price: "MXN 540,000",
      image: "/image copy copy copy copy.png",
      beds: 6,
      baths: 5,
      sqft: "10,000 sq. ft.",
      highlights: {
        en: "Gated community, Clubhouse, Swimming pool, Pet Park, Soccer field, and Children Park",
        es: "Comunidad privada, Casa Club, Piscina, Parque para Mascotas, Cancha de Fútbol y Parque Infantil"
      },
      cta: {
        en: "Schedule a Virtual Tour",
        es: "Programar Tour Virtual"
      }
    }
  ];

  return (
    <section id="listings" className="py-24 bg-gray-50">
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

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    property.id === 1 || property.id === 3
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-blue-900'
                  }`}>
                    {property.id === 1 || property.id === 3
                      ? (language === 'en' ? 'New listing' : 'Nueva propiedad')
                      : t.featured
                    }
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-lg font-bold">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {property.title[language]}
                </h3>

                {/* Property Details */}
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  {property.id === 3 ? (
                    <div className="flex items-center justify-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft}</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.beds} {t.bed}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.baths} {t.bath}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.sqft}</span>
                      </div>
                    </>
                  )}
                </div>

                <p className="text-gray-600 mb-6">
                  {property.highlights[language]}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => window.open('https://wa.me/13472766213', '_blank')}
                  className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    {language === 'es' ? 'Solicitar Mas Informacion' : 'Request More Info'}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={onShowAllListings}
            className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;