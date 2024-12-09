import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cuir Prestige</h3>
            <p className="text-amber-200 mb-4">
              Artisanat de luxe en cuir, alliant tradition burundaise et élégance contemporaine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-amber-200" />
                <span>Bujumbura, Burundi</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-200" />
                <span>+257 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-200" />
                <span>contact@cuirprestige.bi</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Horaires</h3>
            <div className="space-y-2">
              <p>Lundi - Vendredi: 8h - 18h</p>
              <p>Samedi: 9h - 16h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © {new Date().getFullYear()} Cuir Prestige. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;