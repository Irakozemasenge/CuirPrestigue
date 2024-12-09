import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Users, Leaf, Crown, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <PageHeader
        title="À Propos de Cuir Prestige"
        description="L'excellence artisanale au service de votre style"
        image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6">Notre Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cuir Prestige se consacre à l'artisanat de produits en cuir de haute qualité, 
                alliant savoir-faire traditionnel et design contemporain pour offrir des créations 
                intemporelles et exclusives. Nous valorisons le cuir burundais et les talents locaux, 
                en nous engageant à promouvoir la durabilité, l'élégance et l'innovation.
              </p>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6">Notre Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Devenir la marque de référence au Burundi et au-delà pour les produits en cuir de luxe, 
                symbolisant à la fois l'artisanat burundais et l'élégance intemporelle. Nous aspirons à 
                faire de Cuir Prestige un ambassadeur du savoir-faire local sur la scène internationale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-amber-50 dark:bg-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-amber-100 mb-12" data-aos="fade-up">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-amber-800 dark:text-amber-200" />,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque étape de notre travail, de la sélection du cuir à la fabrication, pour garantir des produits de qualité irréprochable."
              },
              {
                icon: <Users className="h-8 w-8 text-amber-800 dark:text-amber-200" />,
                title: "Authenticité",
                description: "Nous célébrons le caractère unique de chaque pièce en cuir, en valorisant le travail manuel et les matériaux authentiques de notre région."
              },
              {
                icon: <Leaf className="h-8 w-8 text-amber-800 dark:text-amber-200" />,
                title: "Durabilité",
                description: "Respectueux de l'environnement, nous nous engageons à utiliser des méthodes de production éthiques et durables pour minimiser notre impact."
              },
              {
                icon: <Crown className="h-8 w-8 text-amber-800 dark:text-amber-200" />,
                title: "Élégance",
                description: "Inspirée par l'élégance intemporelle, chaque création est conçue pour être un symbole de goût et de raffinement."
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-amber-800 dark:text-amber-200" />,
                title: "Innovation",
                description: "Nous marions tradition et innovation pour réinventer le cuir et offrir des produits contemporains, tout en restant fidèles à notre héritage culturel."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;