import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?auto=format&fit=crop&q=80"
            alt="Artisan leather crafting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              L'Excellence du Cuir Burundais
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Découvrez notre collection de produits en cuir authentiques, 
              alliant savoir-faire traditionnel et design contemporain.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors duration-300 rounded-md text-lg font-medium"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-amber-900" data-aos="fade-up">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque étape de notre travail, de la sélection du cuir à la fabrication."
              },
              {
                title: "Authenticité",
                description: "Nous célébrons le caractère unique de chaque pièce en cuir, valorisant le travail manuel authentique."
              },
              {
                title: "Innovation",
                description: "Nous marions tradition et innovation pour réinventer le cuir et offrir des produits contemporains."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-4 text-amber-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-amber-900" data-aos="fade-up">
            Nos Produits Phares
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sac à Main Classic",
                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80",
                price: "180.000 BIF"
              },
              {
                name: "Portefeuille Élégance",
                image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80",
                price: "45.000 BIF"
              },
              {
                name: "Ceinture Tradition",
                image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80",
                price: "35.000 BIF"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[300px] w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-amber-800 text-white hover:bg-amber-700 transition-colors duration-300 rounded-md text-lg font-medium"
            >
              Voir tous nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;