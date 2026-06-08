import { useState } from "react";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import FermentationGuide from "./components/FermentationGuide";
import Herbarium from "./components/Herbarium";

const ALL_TAGS = [...new Set(recipes.flatMap((r) => r.tags || []))];
const ALL_CATS = [...new Set(recipes.map((r) => r.category))];

export default function App() {
  const [activeTag, setActiveTag]  = useState(null);
  const [activeCat, setActiveCat]  = useState(null);
  const [search, setSearch]        = useState("");

  const filtered = recipes.filter((r) => {
    const matchTag = !activeTag || r.tags?.includes(activeTag);
    const matchCat = !activeCat || r.category === activeCat;
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    return matchTag && matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white px-6 py-5 shadow">
        <h1 className="text-2xl font-bold tracking-tight">🌴 DrevmCook</h1>
        <p className="text-sm text-green-100 mt-0.5">
          Ayurvédique · Tropical · Vegan · Guadeloupe
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Recherche */}
        <input
          type="text"
          placeholder="Rechercher recette ou ingrédient…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Filtres catégorie */}
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => setActiveCat(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              !activeCat
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-600 border-gray-200 hover:border-green-400"
            }`}
          >
            Toutes
          </button>
          {ALL_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(activeCat === cat ? null : cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeCat === cat
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtres tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeTag === tag
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-teal-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Compteur */}
        <p className="text-xs text-gray-400 mb-4">
          {filtered.length} recette{filtered.length !== 1 ? "s" : ""} affichée{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grille recettes */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-12">Aucune recette trouvée.</p>
        ) : (
          <div className="grid gap-4">
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        )}

        {/* Sections fixes */}
        <div className="mt-10 space-y-6">
          <FermentationGuide />
          <Herbarium />
        </div>
      </main>
    </div>
  );
}
