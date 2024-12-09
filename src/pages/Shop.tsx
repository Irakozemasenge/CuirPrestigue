import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Filter, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { dispatch } = useCart();

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'chaussures', name: 'Chaussures' },
    { id: 'sacs', name: 'Sacs' },
    { id: 'ceintures', name: 'Ceintures' },
    { id: 'portefeuilles', name: 'Portefeuilles' },
    { id: 'accessoires', name: 'Accessoires' },
    { id: 'etuis', name: 'Étuis' },
    { id: 'vetements', name: 'Vêtements' },
    { id: 'bureau', name: 'Articles de Bureau' },
    { id: 'voyage', name: 'Accessoires Voyage' },
    { id: 'decoration', name: 'Décoration' }
  ];

  const products = [
    {
      id: 1,
      name: "Mocassins Classic",
      category: "chaussures",
      price: "120.000 BIF",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Sac à Main Élégance",
      category: "sacs",
      price: "180.000 BIF",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Ceinture Tradition",
      category: "ceintures",
      price: "35.000 BIF",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Portefeuille Business",
      category: "portefeuilles",
      price: "45.000 BIF",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Bracelet Cuir Tressé",
      category: "accessoires",
      price: "25.000 BIF",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Étui Laptop Premium",
      category: "etuis",
      price: "75.000 BIF",
      image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Blouson Cuir Classic",
      category: "vetements",
      price: "350.000 BIF",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      name: "Sous-main Bureau",
      category: "bureau",
      price: "65.000 BIF",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80"
    },
    {
      id: 9,
      name: "Trousse de Voyage",
      category: "voyage",
      price: "55.000 BIF",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80"
    },
    {
      id: 10,
      name: "Coussin Décoratif",
      category: "decoration",
      price: "85.000 BIF",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
  };

  return (
    <div className="pt-16">
      <PageHeader
        title="Notre Boutique"
        description="Explorez notre collection de produits artisanaux en cuir"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-amber-800 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Catégories</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${selectedCategory === category.id
                      ? 'bg-amber-800 text-white'
                      : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group"
                data-aos="fade-up"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ShoppingBag className="h-5 w-5 text-amber-800" />
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun produit trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;