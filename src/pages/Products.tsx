import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      name: "Sacs & Accessoires",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80",
      description: "Des sacs élégants pour tous les styles"
    },
    {
      name: "Portefeuilles",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80",
      description: "Portefeuilles raffinés et fonctionnels"
    },
    {
      name: "Ceintures",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80",
      description: "Ceintures artisanales de qualité"
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Nos Collections"
        description="Découvrez notre gamme de produits en cuir authentique"
        image="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&q=80"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-96">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-amber-100 mb-4">{category.description}</p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center text-white hover:text-amber-200 transition-colors"
                    >
                      Découvrir
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;