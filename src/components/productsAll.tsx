import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES, Product, CategoryMeta } from "../data/products";
import { Button } from "./ui/button";
import { PRODUCT_DETAIL_LABELS } from "../data/productDetailsMap";

type ViewMode = "categories" | "products";

export const ProductsAll: React.FC = () => {
  // --- États principaux ---
  const [view, setView] = useState<ViewMode>("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryMeta | null>(
    null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("0");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [availablePriceRanges, setAvailablePriceRanges] = useState<
    { label: string; min: number; max: number }[]
  >([]);

  // --- Utilitaires ---
  const formatPrice = (price: number) =>
    `${price.toLocaleString("fr-FR")} FCFA`;

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const highlightMatch = (text: string | undefined): React.ReactNode => {
    if (!text || !searchTerm.trim()) return text || "";
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={i} className="bg-green-300 rounded px-1">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // --- Gestion catégorie ---
  const handleCategoryClick = (category: CategoryMeta) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    setSelectedBrand("");
    setSelectedPriceRange("0");
    setSearchTerm("");
    setView("products");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubcategory("");
    setSelectedBrand("");
    setSelectedPriceRange("0");
    setSearchTerm("");
    setView("categories");
  };

  // --- Générer dynamiquement les intervalles de prix ---
  function generatePriceRanges(products: Product[]) {
    if (!products.length) return [];
    const prices = products.map((p) => p.price).sort((a, b) => a - b);
    const minPrice = Math.floor(prices[0] / 50000) * 50000;
    const maxPrice = Math.ceil(prices[prices.length - 1] / 50000) * 50000;
    const ranges = [];
    for (let start = minPrice; start < maxPrice; start += 50000) {
      const end = start + 50000;
      const hasProducts = products.some(
        (p) => p.price >= start && p.price < end
      );
      if (hasProducts)
        ranges.push({
          label: `${start.toLocaleString()} - ${end.toLocaleString()} FCFA`,
          min: start,
          max: end,
        });
    }
    return [{ label: "Tous les prix", min: 0, max: Infinity }, ...ranges];
  }

  // --- Mise à jour dynamique des prix disponibles ---
  useEffect(() => {
    if (!selectedCategory) return;
    let filtered = PRODUCTS.filter((p) => p.category === selectedCategory.key);
    if (selectedSubcategory)
      filtered = filtered.filter((p) => p.subcategory === selectedSubcategory);
    if (selectedBrand)
      filtered = filtered.filter((p) => p.brand === selectedBrand);
    setAvailablePriceRanges(generatePriceRanges(filtered));
    setSelectedPriceRange("0");
  }, [selectedCategory, selectedSubcategory, selectedBrand]);

  // --- Produits filtrés ---
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => {
        const matchesCategory = p.category === selectedCategory.key;
        const matchesSubcategory =
          selectedSubcategory === "" || p.subcategory === selectedSubcategory;
        const matchesBrand = selectedBrand === "" || p.brand === selectedBrand;
        const matchesSearch =
          searchTerm === "" ||
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.brand &&
            p.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.desc && p.desc.toLowerCase().includes(searchTerm.toLowerCase()));

        const rangeIndex = parseInt(selectedPriceRange);
        const { min, max } = availablePriceRanges[rangeIndex] || {
          min: 0,
          max: Infinity,
        };
        const matchesPrice = p.price >= min && p.price <= max;

        return (
          matchesCategory &&
          matchesSubcategory &&
          matchesBrand &&
          matchesSearch &&
          matchesPrice
        );
      })
    : [];

  // --- Marques disponibles pour la sous-catégorie sélectionnée ---
  const brands = Array.from(
    new Set(
      PRODUCTS.filter(
        (p) =>
          p.category === selectedCategory?.key &&
          (selectedSubcategory === "" ||
            p.subcategory === selectedSubcategory) &&
          p.brand
      ).map((p) => p.brand)
    )
  ).filter((b): b is string => Boolean(b));

  // --- Variants Framer Motion ---
  const cardVariants = {
    hidden: (direction: "left" | "right" | "bottom") => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -50 };
        case "right":
          return { opacity: 0, x: 50 };
        case "bottom":
          return { opacity: 0, y: 50 };
      }
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  // --- Rendu ---
  return (
    <div className="p-6 max-w-full overflow-x-hidden py-20 bg-gray-50">
      {/* --- Header --- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
          Nos Produits
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
         Des équipements de pointe pour une infrastructure plus moderne, plus performante et plus sécurisée.
        </p>
      </div>

      {!selectedProduct && (
        <>
          {/* --- Liste catégories --- */}
          {view === "categories" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat, index) => {
                const direction =
                  index % 3 === 0
                    ? "left"
                    : index % 3 === 1
                    ? "right"
                    : "bottom";
                const productsInCat = PRODUCTS.filter(
                  (p) => p.category === cat.key
                );

                return (
                  <motion.div
                    key={cat.key}
                    className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    custom={direction}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    <sup className="absolute top-3 left-3 bg-white text-base sm:text-lg px-4 py-2 rounded-full z-20 shadow-md text-black font-bold tracking-wide">
                      {cat.label}
                    </sup>
                    <div className="relative h-48 bg-black">
                      <img
                        src={productsInCat[0]?.image ?? ""}
                        alt={cat.label}
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
                    </div>
                    <div className="p-4 bg-white">
                      <Button
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full hover:bg-blue-700 mt-3 text-base sm:text-lg py-3"
                      >
                        Voir les produits
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* --- Liste produits --- */}
          {view === "products" && selectedCategory && (
            <div>
              {/* --- En-tête + retour --- */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  {selectedCategory.label}{" "}
                  <span className="text-lg text-gray-600 font-semibold">
                    ({filteredProducts.length} produit
                    {filteredProducts.length > 1 ? "s" : ""})
                  </span>
                </h2>
                <Button onClick={handleBackToCategories}>
                  Retour aux Catégories
                </Button>
              </div>

              {/* --- Filtres --- */}
              <div className="mb-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 w-full">
                {/* Sous-catégories */}
                <div className="flex items-center gap-2">
                  <label className="font-semibold">Sous-catégories :</label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="border rounded px-3 py-1"
                  >
                    <option value="">Toutes</option>
                    {selectedCategory.subcategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Marques */}
                {brands.length > 0 && (
                  <div className="flex items-center gap-2">
                    <label className="font-semibold whitespace-nowrap">
                      Marques :
                    </label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="border rounded px-3 py-1"
                    >
                      <option value="">Toutes</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Prix */}
                <div className="flex items-center gap-2">
                  <label className="font-semibold whitespace-nowrap">
                    Prix :
                  </label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="border rounded px-3 py-1"
                  >
                    {availablePriceRanges.map((range, index) => (
                      <option key={index} value={index.toString()}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Recherche */}
                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <label className="font-semibold whitespace-nowrap">
                    Rechercher :
                  </label>
                  <input
                    type="text"
                    placeholder="Nom, marque, description..."
                    className="border rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* --- Cartes produits --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts
                  .slice((currentPage - 1) * 20, currentPage * 20)
                  .map((product, index) => {
                    const direction =
                      index % 3 === 0
                        ? "left"
                        : index % 3 === 1
                        ? "right"
                        : "bottom";
                    const desc = product.desc || "";
                    const truncatedDesc = truncateDescription(desc, 10);
                    const showVoirPlus = desc.trim().split(/\s+/).length >= 10;

                    return (
                      <motion.div
                        key={product.id}
                        className="border rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
                        custom={direction}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: "easeIn",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-contain mb-4 rounded bg-black"
                        />
                        <h3 className="text-lg font-bold mb-2">
                          {highlightMatch(product.name)}
                        </h3>
                        <p className="text-sm text-gray-700 mb-1">
                          Marque:{" "}
                          {highlightMatch(product.brand || "Non spécifiée")}
                        </p>
                        <p className="text-sm font-semibold text-blue-700 mb-1">
                          {formatPrice(product.price)}
                        </p>
                        <p className="text-sm mb-2">
                          <strong>Description:</strong>{" "}
                          {highlightMatch(truncatedDesc)}
                        </p>
                        {showVoirPlus && (
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="text-blue-600 underline text-sm mt-1"
                          >
                            Voir plus
                          </button>
                        )}
                      </motion.div>
                    );
                  })}

                {filteredProducts.length === 0 && (
                  <div className="text-center col-span-full py-8">
                    <p className="text-lg font-semibold mb-2">
                      Aucun produit trouvé pour cette recherche.
                    </p>
                    {searchTerm && (
                      <p className="text-gray-600 flex items-center justify-center gap-2">
                        <span className="text-red-500 text-xl font-bold">
                          ⚠️
                        </span>{" "}
                        Videz la barre de recherche pour voir les autres
                        produits des autres marques.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* --- Pagination moderne --- */}
             {/* --- Pagination moderne --- */}
{filteredProducts.length > 20 && (
  <div className="flex justify-center items-center gap-2 mt-20 flex-wrap">
    {Array.from(
      { length: Math.ceil(filteredProducts.length / 20) },
      (_, i) => i + 1
    ).map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-4 py-2 rounded-lg border ${
          currentPage === page
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        } transition`}
      >
        {page}
      </button>
    ))}
  </div>
)}
            </div>
            
          )}
        </>
      )}

      {/* --- Popup produit --- */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh] animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4 rounded bg-gray-100"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-blue-700 font-semibold mb-2">
              {formatPrice(selectedProduct.price)}
            </p>
            <p className="text-sm text-gray-700 whitespace-pre-line mb-4">
              {selectedProduct.desc}
            </p>
            {selectedProduct.details && selectedProduct.details.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Détails :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  {selectedProduct.details.map((value, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-gray-100 pb-1"
                    >
                      <span className="font-medium text-gray-800">
                        {PRODUCT_DETAIL_LABELS[index] || `Détail ${index + 1}`}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-stretch">
              <Button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                ✕ Fermer
              </Button>
              <Button
                onClick={() => window.open("tel:773870030", "_blank")}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                📞 Contacter pour commander
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
