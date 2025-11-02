import React from 'react';
import { ArrowRight, MapPin, Phone, Globe as GlobeIcon } from 'lucide-react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import { Globe } from './ui/globe-feature-section';

interface HeroProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
  onShowListings: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onLanguageChange, onShowListings }) => {
  const content = {
    en: {
      brand: "Creando Tu Riqueza",
      subtitle: "Maria Isabel Real Estate",
      headline: "At Creando tu Riqueza, we guide you so that your investment in land becomes a legacy for you and your family.",
      subheading: "Discover opportunities to buy, sell, or invest in real estate by using it as a currency of exchange.",
      browseListing: "Browse Listings",
      contactMaria: "Contact Maria Isabel",
      propertiesSold: "Clients Served",
      countriesServed: "Countries Served",
      clientSatisfaction: "Client Satisfaction",
      navAbout: "About",
      navListings: "Listings",
      navContact: "Contact",
      scrollToExpand: "Scroll to Explore Properties"
    },
    es: {
      brand: "Creando Tu Riqueza",
      subtitle: "Bienes Raíces Maria Isabel",
      headline: "En Creando tu Riqueza, te guiamos para que tu inversión en bienes raices se convierta en un legado para ti y tu familia.",
      subheading: "Descubre oportunidades para comprar, vender e invertir en bienes raíces usandolos como moneda de cambio.",
      browseListing: "Ver Propiedades",
      contactMaria: "Contactar Maria Isabel",
      propertiesSold: "Clientes Atendidos",
      countriesServed: "Países Atendidos",
      clientSatisfaction: "Satisfacción del Cliente",
      navAbout: "Acerca de",
      navListings: "Propiedades",
      navContact: "Contacto",
      scrollToExpand: "Desplázate para Explorar Propiedades"
    }
  };

  const t = content[language];

  const HeroContent = () => (
    <div className="max-w-7xl mx-auto">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-8 lg:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-white font-bold text-xl">{t.brand}</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">{t.navAbout}</a>
              <a href="#listings" className="text-white hover:text-yellow-400 transition-colors font-medium">{t.navListings}</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors font-medium">{t.navContact}</a>
            </div>
            
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-2 bg-yellow-400 backdrop-blur-md border-2 border-yellow-500 rounded-full px-5 py-2.5 text-blue-900 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="text-base font-bold">{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 mx-6 lg:mx-12 border border-white/20 shadow-2xl">
        <div className="max-w-4xl">
          <p className="text-xl lg:text-2xl text-black mb-8 max-w-2xl leading-relaxed">
            {t.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button 
              onClick={onShowListings}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                {t.browseListing}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a
              href="https://wa.me/13472766213"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                <Phone className="mr-2" />
                {t.contactMaria}
              </span>
            </a>
          </div>

          {/* Stats with Globe */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
              <div className="z-10 flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-lg text-black">{t.propertiesSold}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">USA & MX</div>
                  <div className="text-lg text-black">{t.countriesServed}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-lg text-black">{t.clientSatisfaction}</div>
                </div>
              </div>
              <div className="relative h-[200px] w-full md:w-[300px] flex-shrink-0">
                <Globe className="absolute -top-10 -right-10 md:-right-20 scale-125 md:scale-150" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/IMG_8842 copy.jpeg"
      bgImageSrc="/hero-background.mp4"
      title={t.headline}
      date={t.subtitle}
      scrollToExpand={t.scrollToExpand}
      textBlend={true}
    >
      <HeroContent />
    </ScrollExpandMedia>
  );
};

export default Hero;