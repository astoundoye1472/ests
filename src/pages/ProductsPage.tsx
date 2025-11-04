import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS, PRICE_MIN, PRICE_MAX, type CategoryKey, type Product } from "../data/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Filter, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogClose } from "../components/ui/dialog";
import { AspectRatio } from "../components/ui/aspect-ratio";

function formatPriceFcfa(v: number) {
  const nf = new Intl.NumberFormat("fr-FR");
  return `${nf.format(v)} FCFA`;
}

function useDebounced<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();

  const initialQuery = params.get("q") ?? "";
  const initialCatParam = params.get("cat") ?? params.get("category") ?? "";
  const initialCatKey: CategoryKey | "" = (() => {
    const byKey = CATEGORIES.find((c) => c.key === (initialCatParam as CategoryKey));
    if (byKey) return byKey.key;
    const byLabel = CATEGORIES.find((c) => c.label.toLowerCase() === initialCatParam.toLowerCase());
    return byLabel ? byLabel.key : "";
  })();
  const initialSubs = params.getAll("sub");
  const initialMin = Math.max(PRICE_MIN, Number(params.get("min") || PRICE_MIN));
  const initialMax = Math.min(PRICE_MAX, Number(params.get("max") || PRICE_MAX));
  const initialInStock = params.get("stock") === "in";
  const initialSort = params.get("sort") || "relevance";

  const [query, setQuery] = React.useState(initialQuery);
  const [category, setCategory] = React.useState<CategoryKey | "">(initialCatKey);
  const [subcats, setSubcats] = React.useState<string[]>(initialSubs);
  const [price, setPrice] = React.useState<[number, number]>([initialMin, initialMax]);
  const [inStockOnly, setInStockOnly] = React.useState(initialInStock);
  const [sort, setSort] = React.useState(initialSort);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  const debouncedQuery = useDebounced(query, 400);
  React.useEffect(() => {
    const next = new URLSearchParams();
    if (debouncedQuery) next.set("q", debouncedQuery);
    if (category) next.set("cat", category);
    subcats.forEach((s) => next.append("sub", s));
    if (price[0] !== PRICE_MIN) next.set("min", String(price[0]));
    if (price[1] !== PRICE_MAX) next.set("max", String(price[1]));
    if (inStockOnly) next.set("stock", "in");
    if (sort && sort !== "relevance") next.set("sort", sort);
    setParams(next, { replace: true });
  }, [debouncedQuery, category, subcats, price, inStockOnly, sort, setParams]);

  const productsAfterText = React.useMemo(() => {
    if (!debouncedQuery) return PRODUCTS;
    const q = debouncedQuery.toLowerCase();
    return PRODUCTS.filter((p) =>
      [p.name, p.brand, ...(p.tags || [])]
        .filter(Boolean)
        .some((t) => String(t).toLowerCase().includes(q)),
    );
  }, [debouncedQuery]);

  const productsAfterCategory = React.useMemo(() => {
    if (!category) return productsAfterText;
    return productsAfterText.filter((p) => p.category === category);
  }, [productsAfterText, category]);

  const productsAfterSub = React.useMemo(() => {
    if (!subcats.length) return productsAfterCategory;
    const set = new Set(subcats);
    return productsAfterCategory.filter((p) => set.has(p.subcategory));
  }, [productsAfterCategory, subcats]);

  const productsAfterPrice = React.useMemo(() => {
    const [min, max] = price;
    return productsAfterSub.filter((p) => p.price >= min && p.price <= max);
  }, [productsAfterSub, price]);

  const productsAfterStock = React.useMemo(() => {
    if (!inStockOnly) return productsAfterPrice;
    return productsAfterPrice.filter((p) => p.stock === "En stock");
  }, [productsAfterPrice, inStockOnly]);

  const productsSorted = React.useMemo(() => {
    const arr = [...productsAfterStock];
    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [productsAfterStock, sort]);

  const availableSubcats = React.useMemo(() => {
    const meta = CATEGORIES.find((c) => c.key === category);
    return meta ? meta.subcategories : [];
  }, [category]);

  const availableBrands = React.useMemo(() => {
    const scope = category ? productsAfterCategory : productsAfterText;
    const set = new Set(scope.map((p) => p.brand).filter(Boolean) as string[]);
    return Array.from(set).sort();
  }, [productsAfterCategory, productsAfterText, category]);

  const [brands, setBrands] = React.useState<string[]>(params.getAll("brand"));
  React.useEffect(() => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("brand");
      brands.forEach((b) => next.append("brand", b));
      return next;
    }, { replace: true });
  }, [brands, setParams]);

  const finalProducts = React.useMemo(() => {
    if (!brands.length) return productsSorted;
    const set = new Set(brands);
    return productsSorted.filter((p) => (p.brand ? set.has(p.brand) : false));
  }, [productsSorted, brands]);

  React.useEffect(() => {
    setSubcats((subs) => subs.filter((s) => availableSubcats.includes(s)));
    setBrands((bs) => bs.filter((b) => availableBrands.includes(b)));
  }, [availableSubcats, availableBrands]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
       {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl text-gray-900 mb-1">Produits</h1>
            <p className="text-gray-600">Explorez notre catalogue et filtrez par catégories, sous-catégories, prix et disponibilité.</p>
          </div>
          <div className="md:hidden">
            {/* Bouton mobile pour ouvrir les filtres */}
            <Button variant="outline" onClick={() => setMobileFiltersOpen(true)}>
              <Filter className="h-4 w-4 mr-2" /> Filtres
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher un produit, une marque, un mot-clé…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
              aria-label="Recherche"
            />
          </div>

          <div className="flex items-center gap-3">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Trier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Pertinence</SelectItem>
                <SelectItem value="price-asc">Prix: croissant</SelectItem>
                <SelectItem value="price-desc">Prix: décroissant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick category filters just below search */}
        <CategoryQuickFilters
          category={category}
          onSelect={(key) => setCategory((prev) => (prev === key ? "" : key))}
          onClear={() => setCategory("")}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <FiltersPanel
              category={category}
              setCategory={setCategory}
              subcats={subcats}
              setSubcats={setSubcats}
              availableSubcats={availableSubcats}
              price={price}
              setPrice={setPrice}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              brands={brands}
              setBrands={setBrands}
              availableBrands={availableBrands}
            />
          </aside>

          <section className="md:col-span-9 lg:col-span-9">
            <ActiveFiltersChips
              category={category}
              setCategory={setCategory}
              subcats={subcats}
              setSubcats={setSubcats}
              price={price}
              setPrice={setPrice}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              brands={brands}
              setBrands={setBrands}
            />

            {finalProducts.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <p className="text-gray-900 font-medium mb-2">Aucun produit ne correspond à vos filtres</p>
                  <p className="text-gray-600 mb-6">Essayez d'élargir votre recherche ou réinitialisez les filtres.</p>
                  <Button variant="outline" onClick={() => {
                    setQuery("");
                    setCategory("");
                    setSubcats([]);
                    setPrice([PRICE_MIN, PRICE_MAX]);
                    setInStockOnly(false);
                    setBrands([]);
                    setSort("relevance");
                  }}>Réinitialiser</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-[1em]">
                {finalProducts.map((p) => (
                  <div key={p.id}>
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <Dialog open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <DialogContent className="w-[calc(100%-1rem)] sm:max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle>Filtres</DialogTitle>
              <DialogDescription>Affinez votre recherche selon vos besoins</DialogDescription>
            </DialogHeader>
            <FiltersPanel
              category={category}
              setCategory={setCategory}
              subcats={subcats}
              setSubcats={setSubcats}
              availableSubcats={availableSubcats}
              price={price}
              setPrice={setPrice}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              brands={brands}
              setBrands={setBrands}
              availableBrands={availableBrands}
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setQuery("");
                setCategory("");
                setSubcats([]);
                setPrice([PRICE_MIN, PRICE_MAX]);
                setInStockOnly(false);
                setBrands([]);
                setSort("relevance");
              }}>Réinitialiser</Button>
              <DialogClose asChild>
                <Button>Appliquer</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function FiltersPanel(props: {
  category: CategoryKey | "";
  setCategory: (v: CategoryKey | "") => void;
  subcats: string[];
  setSubcats: (v: string[]) => void;
  availableSubcats: string[];
  price: [number, number];
  setPrice: (v: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  brands: string[];
  setBrands: (v: string[]) => void;
  availableBrands: string[];
}) {
  const {
    category, setCategory,
    subcats, setSubcats, availableSubcats,
    price, setPrice,
    inStockOnly, setInStockOnly,
    brands, setBrands, availableBrands,
  } = props;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Catégorie</CardTitle>
          <CardDescription>Sélectionnez une catégorie principale</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Select
            value={category || undefined}
            onValueChange={(v) => setCategory(v as CategoryKey)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Toutes les catégories" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  <span className={`inline-flex items-center gap-2`}>
                    <c.icon className={`h-4 w-4 ${c.colorClass}`} />
                    {c.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {category && (
            <Button variant="ghost" size="sm" onClick={() => setCategory("")} className="mt-1 text-gray-600">Effacer</Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sous-catégories</CardTitle>
          <CardDescription>Affinez votre recherche</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {availableSubcats.length === 0 ? (
            <p className="text-sm text-gray-500">Choisissez une catégorie pour voir les sous-catégories.</p>
          ) : (
            <div className="space-y-2">
              {availableSubcats.map((s) => {
                const checked = subcats.includes(s);
                return (
                  <label key={s} className="flex items-center gap-2 text-sm">
                    <Checkbox checked={checked} onCheckedChange={(v) => {
                      const isOn = Boolean(v);
                      if (isOn) setSubcats([...subcats, s]);
                      else setSubcats(subcats.filter((x) => x !== s));
                    }} />
                    <span>{s}</span>
                  </label>
                );
              })}
              {subcats.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setSubcats([])} className="text-gray-600">Effacer</Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Prix</CardTitle>
          <CardDescription>Plage en FCFA</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="px-1">
            <Slider
              value={price as unknown as number[]}
              min={PRICE_MIN}
              max={PRICE_MAX}
              onValueChange={(v) => {
                const [min, max] = v as number[];
                setPrice([min, max]);
              }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
            <span>{formatPriceFcfa(price[0])}</span>
            <span>{formatPriceFcfa(price[1])}</span>
          </div>
          {(price[0] !== PRICE_MIN || price[1] !== PRICE_MAX) && (
            <Button variant="ghost" size="sm" onClick={() => setPrice([PRICE_MIN, PRICE_MAX])} className="mt-2 text-gray-600">Réinitialiser</Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Disponibilité</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={inStockOnly} onCheckedChange={(v) => setInStockOnly(Boolean(v))} />
            <span>En stock uniquement</span>
          </label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Marques</CardTitle>
          <CardDescription>Filtrer par marque</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {availableBrands.length === 0 ? (
            <p className="text-sm text-gray-500">Aucune marque disponible pour cette sélection.</p>
          ) : (
            <div className="space-y-2">
              {availableBrands.map((b) => {
                const checked = brands.includes(b);
                return (
                  <label key={b} className="flex items-center gap-2 text-sm">
                    <Checkbox checked={checked} onCheckedChange={(v) => {
                      const isOn = Boolean(v);
                      if (isOn) setBrands([...brands, b]);
                      else setBrands(brands.filter((x) => x !== b));
                    }} />
                    <span>{b}</span>
                  </label>
                );
              })}
              {brands.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setBrands([])} className="text-gray-600">Effacer</Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ActiveFiltersChips(props: {
  category: CategoryKey | "";
  setCategory: (v: CategoryKey | "") => void;
  subcats: string[];
  setSubcats: (v: string[]) => void;
  price: [number, number];
  setPrice: (v: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  brands: string[];
  setBrands: (v: string[]) => void;
}) {
  const { category, setCategory, subcats, setSubcats, price, setPrice, inStockOnly, setInStockOnly, brands, setBrands } = props;
  const chips: Array<{ key: string; label: string; onRemove: () => void; }> = [];
  if (category) {
    const meta = CATEGORIES.find((c) => c.key === category)!;
    chips.push({ key: `cat:${category}`, label: meta.label, onRemove: () => setCategory("") });
  }
  for (const s of subcats) chips.push({ key: `sub:${s}`, label: s, onRemove: () => setSubcats(subcats.filter((x) => x !== s)) });
  if (price[0] !== PRICE_MIN || price[1] !== PRICE_MAX) {
    chips.push({ key: `price`, label: `${formatPriceFcfa(price[0])} - ${formatPriceFcfa(price[1])}`, onRemove: () => setPrice([PRICE_MIN, PRICE_MAX]) });
  }
  if (inStockOnly) chips.push({ key: `stock`, label: "En stock", onRemove: () => setInStockOnly(false) });
  for (const b of brands) chips.push({ key: `brand:${b}`, label: b, onRemove: () => setBrands(brands.filter((x) => x !== b)) });

  if (chips.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {chips.map((c) => (
        <span key={c.key} className="inline-flex items-center gap-1 text-sm bg-blue-50 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200">
          {c.label}
          <button className="hover:text-gray-900" aria-label={`Retirer ${c.label}`} onClick={c.onRemove}>
            <X className="h-3.5 w-3.5" />
          </button>
        </span>
      ))}
      <Button variant="ghost" size="sm" onClick={() => {
        setCategory("");
        setSubcats([]);
        setPrice([PRICE_MIN, PRICE_MAX]);
        setInStockOnly(false);
        setBrands([]);
      }} className="text-gray-600">Effacer tout</Button>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </AspectRatio>
        {product.stock && (
          <div className="absolute top-3 left-3">
            <Badge className={product.stock === "En stock" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}>
              {product.stock}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-base text-gray-900 leading-snug">
          <span className="block text-sm text-gray-500 font-normal">{product.brand}</span>
          {product.name}
        </CardTitle>
        <CardDescription className="text-gray-900 font-medium">{formatPriceFcfa(product.price)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <a
            className="text-blue-600 hover:text-blue-700 text-sm"
            href={`mailto:contact@ests-informatique.sn?subject=Demande d'information: ${encodeURIComponent(product.name)}&body=Bonjour,%20je%20souhaite%20plus%20d'informations%20sur%20le%20produit%20${encodeURIComponent(product.name)}.`}
          >
            Demander des infos
          </a>
          <Button variant="outline" size="sm">Ajouter au devis</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Map low-opacity background styles for category buttons (explicit classes so Tailwind keeps them)
const CATEGORY_BUTTON_STYLES: Record<CategoryKey, { base: string; selected: string; text: string; hover: string }> = {
  computers: {
    base: "bg-blue-600/10 border-blue-600/10",
    selected: "bg-blue-600/20 ring-1 ring-blue-600/30",
    text: "text-blue-700",
    hover: "hover:bg-blue-600/15",
  },
  infrastructure: {
    base: "bg-green-600/10 border-green-600/10",
    selected: "bg-green-600/20 ring-1 ring-green-600/30",
    text: "text-green-700",
    hover: "hover:bg-green-600/15",
  },
  peripherals: {
    base: "bg-purple-600/10 border-purple-600/10",
    selected: "bg-purple-600/20 ring-1 ring-purple-600/30",
    text: "text-purple-700",
    hover: "hover:bg-purple-600/15",
  },
  storage: {
    base: "bg-orange-600/10 border-orange-600/10",
    selected: "bg-orange-600/20 ring-1 ring-orange-600/30",
    text: "text-orange-700",
    hover: "hover:bg-orange-600/15",
  },
  network: {
    base: "bg-teal-600/10 border-teal-600/10",
    selected: "bg-teal-600/20 ring-1 ring-teal-600/30",
    text: "text-teal-700",
    hover: "hover:bg-teal-600/15",
  },
  "applications avec licences et antivirus": {
    base: "bg-red-600/10 border-red-600/10",
    selected: "bg-red-600/20 ring-1 ring-red-600/30",
    text: "text-red-700",
    hover: "hover:bg-red-600/15",
  },
};

function CategoryQuickFilters({
  category,
  onSelect,
  onClear,
}: {
  category: CategoryKey | "";
  onSelect: (k: CategoryKey) => void;
  onClear: () => void;
}) {
  return (
    <div className="-mx-2 px-2 mb-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap md:gap-2 lg:flex-nowrap lg:justify-center lg:gap-3 xl:gap-4">
        <Button
          variant="outline"
          size="sm"
          className={`w-full justify-center border border-gray-200 bg-gray-50/60 text-gray-700 hover:bg-gray-100 ${category === "" ? "ring-1 ring-gray-300" : ""}`}
          onClick={onClear}
        >
          Tous
        </Button>
        {CATEGORIES.map((c) => {
          const st = CATEGORY_BUTTON_STYLES[c.key];
          const isActive = category === c.key;
          return (
            <Button
              key={c.key}
              variant="outline"
              size="sm"
              aria-pressed={isActive}
              className={`w-full justify-center border ${st.base} ${st.text} ${st.hover} ${isActive ? st.selected : ""} flex items-center gap-2`}
              onClick={() => onSelect(c.key)}
              title={c.label}
            >
              <c.icon className="h-4 w-4" />
              <span>{c.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
