import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowLeft, ArrowRight } from 'lucide-react';

interface ListingsPageProps {
  language: 'en' | 'es';
  onBack: () => void;
}

const ListingsPage: React.FC<ListingsPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: "All Properties",
      subtitle: "Browse our complete collection of properties worldwide",
      backToHome: "Back to Home",
      bed: "bed",
      bath: "bath",
      requestInfo: "Request More Info",
      featured: "Featured",
      newListing: "New Listing",
      priceReduced: "Price Reduced"
    },
    es: {
      title: "Todas las Propiedades",
      subtitle: "Explora nuestra colección completa de propiedades mundialmente",
      backToHome: "Volver al Inicio",
      bed: "rec",
      bath: "baño",
      requestInfo: "Solicitar Más Información",
      featured: "Destacada",
      newListing: "Nueva Propiedad",
      priceReduced: "Precio Reducido"
    }
  };

  const t = content[language];

  const allProperties = [
    {
      id: 1,
      title: {
        en: "31 Florida St, Elizabeth NJ",
        es: "31 Florida St, Elizabeth NJ"
      },
      location: "Elizabeth NJ, USA",
      price: "$1,250,000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 7,
      baths: 5,
      sqft: "2,100 sq. ft.",
      highlights: {
        en: "First floor commercial space, Second floor two duplex.",
        es: "Espacio comercial en primer piso, segundo piso dos dúplex."
      },
      badge: "new"
    },
    {
      id: 2,
      title: {
        en: "Modern City Apartment",
        es: "Apartamento Moderno en la Ciudad"
      },
      location: "Madrid, Spain",
      price: "€650,000",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 2,
      baths: 2,
      sqft: "1,200 sq. ft.",
      highlights: {
        en: "Skyline views, furnished",
        es: "Vistas panorámicas, amueblado"
      },
      badge: "new"
    },
    {
      id: 3,
      title: {
        en: "Chaka Lotes Urbanizados",
        es: "Chaka Lotes Urbanizados"
      },
      location: "Yucatan, Mexico",
      price: "MXN 540,000",
      image: "/1536b7bd-ef15-4024-89e3-80cb1945307c.jpeg",
      beds: 4,
      baths: 3,
      sqft: "2,500 sq. ft.",
      highlights: {
        en: "Backyard pool, gated community",
        es: "Piscina en el patio, comunidad privada"
      },
      badge: "featured"
    },
    {
      id: 4,
      title: {
        en: "Mountain View Chalet",
        es: "Chalet con Vista a la Montaña"
      },
      location: "Aspen, CO, USA",
      price: "$2,800,000",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 5,
      baths: 4,
      sqft: "3,800 sq. ft.",
      highlights: {
        en: "Ski-in/ski-out, fireplace",
        es: "Acceso directo a pistas, chimenea"
      },
      badge: "new"
    },
    {
      id: 5,
      title: {
        en: "Historic Townhouse",
        es: "Casa Histórica"
      },
      location: "London, UK",
      price: "£1,850,000",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 4,
      baths: 3,
      sqft: "2,800 sq. ft.",
      highlights: {
        en: "Victorian architecture, garden",
        es: "Arquitectura victoriana, jardín"
      },
      badge: "priceReduced"
    },
    {
      id: 6,
      title: {
        en: "Beachfront Villa",
        es: "Villa Frente a la Playa"
      },
      location: "Santorini, Greece",
      price: "€1,200,000",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 3,
      baths: 2,
      sqft: "1,900 sq. ft.",
      highlights: {
        en: "Infinity pool, sunset views",
        es: "Piscina infinita, vistas al atardecer"
      },
      badge: "featured"
    },
    {
      id: 7,
      title: {
        en: "Modern Penthouse",
        es: "Penthouse Moderno"
      },
      location: "Dubai, UAE",
      price: "$3,500,000",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 4,
      baths: 4,
      sqft: "3,200 sq. ft.",
      highlights: {
        en: "City skyline, luxury finishes",
        es: "Vista de la ciudad, acabados de lujo"
      },
      badge: "new"
    },
    {
      id: 8,
      title: {
        en: "Countryside Estate",
        es: "Finca en el Campo"
      },
      location: "Tuscany, Italy",
      price: "€2,200,000",
      image: "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 6,
      baths: 5,
      sqft: "4,500 sq. ft.",
      highlights: {
        en: "Vineyard, historic charm",
        es: "Viñedo, encanto histórico"
      },
      badge: "featured"
    },
    {
      id: 9,
      title: {
        en: "Lakefront Cabin",
        es: "Cabaña Junto al Lago"
      },
      location: "Lake Tahoe, CA, USA",
      price: "$1,800,000",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beds: 3,
      baths: 2,
      sqft: "2,200 sq. ft.",
      highlights: {
        en: "Private dock, mountain views",
        es: "Muelle privado, vistas a la montaña"
      },
      badge: "priceReduced"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'featured':
        return 'bg-yellow-500 text-blue-900';
      case 'new':
        return 'bg-green-500 text-white';
      case 'priceReduced':
        return 'bg-red-500 text-white';
      default:
        return 'bg-yellow-500 text-blue-900';
    }
  };

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case 'featured':
        return t.featured;
      case 'new':
        return t.newListing;
      case 'priceReduced':
        return t.priceReduced;
      default:
        return t.featured;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.backToHome}
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProperties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title[language]}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getBadgeColor(property.badge)}`}>
                    {getBadgeText(property.badge)}
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
                </div>

                <p className="text-gray-600 mb-6">
                  {property.highlights[language]}
                </p>

                {/* CTA Button */}
                <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    {t.requestInfo}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;