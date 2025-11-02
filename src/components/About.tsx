import React from 'react';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'es';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: "About Maria Isabel",
      paragraph1: "Maria Isabel is the founder of Creando Tu Riqueza, a personal brand built on the belief that real estate is one of the most powerful ways to create lasting wealth. With years of experience in buying and selling properties worldwide, Maria Isabel brings passion, trust, and professionalism to every client she serves.",
      paragraph2: "Her mission is simple: to help families, investors, and entrepreneurs turn their real estate goals into reality, whether it's finding a dream home, securing a profitable investment, or selling at the best possible price.",
      quote: "Real estate is not just about property—it's about creating your legacy.",
      expertGuidance: "Expert Guidance",
      globalReach: "Global Reach",
      clientFocused: "Client-Focused",
      wealthBuilding: "Wealth Building",
      altText: "Maria Isabel - Professional Realtor",
      cardTitle: "Maria Isabel Luis Romero, Author",
      cardSubtitle: "Real Estate Expert",
      cardTagline: "Creating Your Wealth"
    },
    es: {
      title: "Acerca de Maria Isabel",
      paragraph1: "Maria Isabel es la fundadora de Creando Tu Riqueza, una marca personal construida sobre la creencia de que los bienes raíces son una de las formas más poderosas de crear riqueza duradera. Con años de experiencia comprando y vendiendo propiedades en todo el mundo, Maria Isabel aporta pasión, confianza y profesionalismo a cada cliente que atiende.",
      paragraph2: "Su misión es simple: ayudar a familias, inversionistas y emprendedores a convertir sus objetivos inmobiliarios en realidad, ya sea encontrar la casa de sus sueños, asegurar una inversión rentable o vender al mejor precio posible.",
      quote: "Los bienes raíces no se tratan solo de propiedades—se trata de crear tu legado.",
      expertGuidance: "Guía Experta",
      globalReach: "Alcance Global",
      clientFocused: "Enfoque al Cliente",
      wealthBuilding: "Creación de Riqueza",
      altText: "Maria Isabel - Agente Inmobiliaria Profesional",
      cardTitle: "Maria Isabel Luis Romero, Autora",
      cardSubtitle: "Experta en Bienes Raíces",
      cardTagline: "Creando Tu Riqueza"
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">
              {t.title}
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Maria Isabel is the founder of <strong className="text-yellow-600">Creando Tu Riqueza</strong>, a personal brand built on the belief that real estate is one of the most powerful ways to create lasting wealth. 15 years of experience in buying and selling properties worldwide, Maria Isabel brings passion, trust, and professionalism to every client she serves. In 2020 Maria Isabel expands her horizons to motherland Mexico. Becoming strong partnerships to offer Lotes Urbanizados, and spread the opportunity of diversifying with the lands converting one currency of exchange.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.paragraph2}
              </p>
              
              <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-xl text-blue-900 font-medium">
                {language === 'en' 
                  ? "Real estate is the beginning, vision is the path, wealth is the destination."
                  : "Los bienes raíces son el comienzo, la visión es el camino, la riqueza es el destino."
                }
              </blockquote>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-blue-900 font-semibold">{t.expertGuidance}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-blue-900 font-semibold">{t.globalReach}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-blue-900 font-semibold">{t.clientFocused}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-blue-900 font-semibold">{t.wealthBuilding}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/IMG_8842.jpeg"
                alt={t.altText}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.amazon.com/dp/B0FLX4KBCS?ref=yb_qv_ov_prnt_dp_aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <img
                    src="/image copy.png"
                    alt="Maria Isabel Inversiones Logo"
                    className="w-32 h-28 object-contain"
                  />
                </a>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">{t.cardTitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;