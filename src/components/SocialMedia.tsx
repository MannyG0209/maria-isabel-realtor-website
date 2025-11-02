import React from 'react';
import { Facebook, Instagram, Youtube, ExternalLink, Users } from 'lucide-react';

interface SocialMediaProps {
  language: 'en' | 'es';
}

const SocialMedia: React.FC<SocialMediaProps> = ({ language }) => {
  const content = {
    en: {
      title: "Stay Connected",
      subtitle: "Follow Maria Isabel's journey and discover the latest properties, market insights, and success stories from around the world.",
      facebookTitle: "Facebook",
      facebookSubtitle: "Connect & Engage",
      facebookDescription: "Join our Facebook community to stay updated on the latest listings, market trends, and real estate tips from Maria Isabel and the Creando Tu Riqueza team.",
      facebookButton: "Follow on Facebook",
      instagramTitle: "Instagram",
      instagramSubtitle: "Visual Stories",
      instagramDescription: "Explore stunning property photos, behind-the-scenes content, and lifestyle inspiration on Maria Isabel's Instagram profile.",
      instagramButton: "Follow on Instagram",
      youtubeTitle: "YouTube",
      youtubeSubtitle: "Video Content",
      youtubeDescription: "Watch in-depth property tours, market analysis, real estate tips, and success stories on Maria Isabel's YouTube channel.",
      youtubeButton: "Subscribe on YouTube",
      followers: "Followers",
      updatedDaily: "Updated daily",
      storiesAndPosts: "Stories & Posts",
      totalFollowers: "Total Followers",
      propertiesFeatured: "Clients Served",
      engagementRate: "Engagement Rate"
    },
    es: {
      title: "Mantente Conectado",
      subtitle: "Sigue el viaje de Maria Isabel y descubre las últimas propiedades, perspectivas del mercado e historias de éxito de todo el mundo.",
      facebookTitle: "Facebook",
      facebookSubtitle: "Conectar y Participar",
      facebookDescription: "Únete a nuestra comunidad de Facebook para mantenerte actualizado sobre las últimas propiedades, tendencias del mercado y consejos inmobiliarios de Maria Isabel y el equipo de Creando Tu Riqueza.",
      facebookButton: "Seguir en Facebook",
      instagramTitle: "Instagram",
      instagramSubtitle: "Historias Visuales",
      instagramDescription: "Explora fotos impresionantes de propiedades, contenido detrás de escenas e inspiración de estilo de vida en el perfil de Instagram de Maria Isabel.",
      instagramButton: "Seguir en Instagram",
      youtubeTitle: "YouTube",
      youtubeSubtitle: "Contenido de Video",
      youtubeDescription: "Mira recorridos de propiedades en profundidad, análisis de mercado, consejos inmobiliarios e historias de éxito en el canal de YouTube de Maria Isabel.",
      youtubeButton: "Suscríbete en YouTube",
      followers: "Seguidores",
      updatedDaily: "Actualizado diariamente",
      storiesAndPosts: "Historias y Publicaciones",
      totalFollowers: "Total de Seguidores",
      propertiesFeatured: "Clientes Atendidos",
      engagementRate: "Tasa de Participación"
    }
  };

  const t = content[language];

  return (
    <section className="py-24 bg-gray-50">
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

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Facebook Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Facebook</h3>
                  <p className="text-gray-600">{t.facebookSubtitle}</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t.facebookDescription}
            </p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">5,000+ {t.followers}</span>
              </div>
              <span className="text-sm text-gray-500">{t.updatedDaily}</span>
            </div>
            
            <a
              href="https://www.facebook.com/share/16zDTTXw7r/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-center transform hover:scale-105"
            >
              {t.facebookButton}
            </a>
          </div>

          {/* Instagram Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Instagram</h3>
                  <p className="text-gray-600">{t.instagramSubtitle}</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t.instagramDescription}
            </p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">8,500+ {t.followers}</span>
              </div>
              <span className="text-sm text-gray-500">{t.storiesAndPosts}</span>
            </div>
            
            <a
              href="https://www.instagram.com/mariaisabel.luis.3?igsh=bjZ3emFna2tka3g2"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center transform hover:scale-105"
            >
              {t.instagramButton}
            </a>
          </div>

          {/* YouTube Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">YouTube</h3>
                  <p className="text-gray-600">{t.youtubeSubtitle}</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" />
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {t.youtubeDescription}
            </p>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-600">1,200+ {t.followers}</span>
              </div>
              <span className="text-sm text-gray-500">{t.updatedDaily}</span>
            </div>

            <a
              href="https://www.youtube.com/@mariaisabelcreandoturiqueza?si=7FFtZqPoQ260cv-a"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 text-center transform hover:scale-105"
            >
              {t.youtubeButton}
            </a>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">14,700+</div>
              <div className="text-gray-600">{t.totalFollowers}</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">{t.propertiesFeatured}</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">4.9/5</div>
              <div className="text-gray-600">{t.engagementRate}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;