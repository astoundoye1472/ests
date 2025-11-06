import React, { useState } from "react";
import { CATEGORIES, PRODUCTS, Product, CategoryMeta } from "../data/products";

export const ProductsAll: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryMeta | null>(null);

  // Récupère les produits de la catégorie sélectionnée
  const filteredProducts: Product[] = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory.key)
    : [];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Nos Produits</h2>

      {/* Affichage des catégories si aucune sélection */}
      {!selectedCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="border rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 cursor-pointer "
              onClick={() => setSelectedCategory(cat)}
            >
              <div className="flex items-center mb-4">
                <cat.icon className={`w-6 h-6 mr-2 ${cat.colorClass}`} />
                <h3 className="text-lg font-semibold">{cat.label}</h3>
              </div>
              <p className="text-gray-600">{cat.subcategories.slice(0, 3).join(", ")}</p>
            </div>
          ))}
        </div>
      )}

      {/* Affichage des produits si une catégorie est sélectionnée */}
      {selectedCategory && (
        <div>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            ← Retour aux catégories
          </button>

          <h2 className="text-2xl font-bold mb-6">{selectedCategory.label}</h2>

          {filteredProducts.length === 0 ? (
            <p>Aucun produit disponible pour cette catégorie.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>
                  <p
                    className={`text-sm ${
                      product.stock === "En stock" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
