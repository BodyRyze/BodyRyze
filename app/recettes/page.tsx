"use client";

import Link from "next/link";
import { useState } from "react";
import { Objectif, OBJECTIF_LABELS } from "@/data/recipes";
import { findMatches, RecipeMatch } from "@/lib/matchRecipes";

const OBJECTIFS: Objectif[] = ["prise-de-masse", "seche", "healthy"];

export default function Recettes() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [objectif, setObjectif] = useState<Objectif>("prise-de-masse");
  const [onlyComplete, setOnlyComplete] = useState(false);
  const [results, setResults] = useState<RecipeMatch[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  function addIngredient() {
    const value = ingredientInput.trim().toLowerCase();
    if (!value || ingredients.includes(value)) {
      setIngredientInput("");
      return;
    }
    setIngredients((prev) => [...prev, value]);
    setIngredientInput("");
  }

  function removeIngredient(target: string) {
    setIngredients((prev) => prev.filter((ing) => ing !== target));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addIngredient();
    }
  }

  function handleSearch() {
    if (ingredients.length === 0) return;
    const matches = findMatches(ingredients, objectif, 10);
    const filtered = onlyComplete ? matches.filter((m) => m.missing.length === 0) : matches;
    setResults(filtered.slice(0, 3));
    setHasSearched(true);
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#05070d] px-6 py-24 text-white">
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e6bff] opacity-20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#98a2b8] transition hover:text-white">
          ← Retour à l'accueil
        </Link>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#7db4ff]">Ton frigo, ta recette</p>
        <h1
          className="text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl"
          style={{ fontFamily: "'Anton', sans-serif", fontStyle: "italic" }}
        >
          Qu'est-ce qu'on{" "}
          <span className="bg-gradient-to-r from-[#00e5ff] to-[#1e6bff] bg-clip-text text-transparent">cuisine</span> ?
        </h1>
        <p className="mt-5 max-w-xl text-[#aeb6c8]">
          Ajoute les ingrédients que t'as sous la main, choisis ton objectif, et on te trouve la recette adaptée.
        </p>

        {/* ---------- FORMULAIRE ---------- */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
          <label className="text-sm font-semibold uppercase tracking-wide text-[#7db4ff]">Tes ingrédients</label>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ex: poulet, riz, oeuf..."
              className="w-full rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white placeholder:text-[#5b657c] outline-none focus:border-[#1e6bff]"
            />
            <button
              onClick={addIngredient}
              className="flex-none rounded-full bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
            >
              Ajouter
            </button>
          </div>

          {ingredients.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {ingredients.map((ing) => (
                <span
                  key={ing}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1e6bff]/15 px-4 py-1.5 text-sm text-[#9dc0ff]"
                >
                  {ing}
                  <button
                    onClick={() => removeIngredient(ing)}
                    className="text-[#7db4ff] transition hover:text-white"
                    aria-label={`Retirer ${ing}`}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}

          <label className="mt-8 block text-sm font-semibold uppercase tracking-wide text-[#7db4ff]">Ton objectif</label>
          <div className="mt-3 flex flex-wrap gap-3">
            {OBJECTIFS.map((o) => (
              <button
                key={o}
                onClick={() => setObjectif(o)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
                  objectif === o
                    ? "bg-[#1e6bff] text-white shadow-[0_0_25px_rgba(30,107,255,0.6)]"
                    : "bg-white/5 text-[#aeb6c8] hover:bg-white/10"
                }`}
              >
                {OBJECTIF_LABELS[o]}
              </button>
            ))}
          </div>

          <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm text-[#dbe0ea]">
            <input
              type="checkbox"
              checked={onlyComplete}
              onChange={(e) => setOnlyComplete(e.target.checked)}
              className="h-4 w-4 accent-[#1e6bff]"
            />
            Montrer seulement les recettes que je peux faire à 100% (rien à acheter)
          </label>

          <button
            onClick={handleSearch}
            disabled={ingredients.length === 0}
            className="mt-10 w-full rounded-full bg-[#1e6bff] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_35px_rgba(30,107,255,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(30,107,255,0.9)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_35px_rgba(30,107,255,0.6)]"
          >
            Trouver ma recette
          </button>
        </div>

        {/* ---------- RESULTATS ---------- */}
        {hasSearched && results && results.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-[#aeb6c8]">
            {onlyComplete
              ? "Aucune recette réalisable à 100% avec ces ingrédients. Décoche le filtre ou ajoute des ingrédients."
              : "Aucune recette ne correspond à ces ingrédients pour l'instant. Essaie d'en ajouter d'autres !"}
          </div>
        )}

        {results && results.length > 0 && (
          <div className="mt-10 space-y-6">
            {results.map(({ recipe, missing }) => (
              <div key={recipe.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-black text-white">{recipe.nom}</h2>
                  <span className="rounded-full bg-[#1e6bff]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#9dc0ff]">
                    {OBJECTIF_LABELS[recipe.objectif]}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-6 text-sm text-[#dbe0ea]">
                  <span>🔥 <strong className="text-white">{recipe.calories}</strong> kcal</span>
                  <span>💪 <strong className="text-white">{recipe.proteines}</strong> g de protéines</span>
                  <span>⏱ {recipe.temps}</span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7db4ff]">Ingrédients</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {recipe.ingredients.map((ing) => {
                      const isMissing = missing.includes(ing);
                      return (
                        <li
                          key={ing}
                          className={`rounded-full px-4 py-1.5 text-sm ${
                            isMissing ? "bg-white/5 text-[#5b657c] line-through" : "bg-[#1e6bff]/15 text-[#9dc0ff]"
                          }`}
                        >
                          {isMissing ? `${ing} (à acheter)` : ing}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7db4ff]">Préparation</p>
                  <ol className="mt-3 space-y-2 text-sm text-[#dbe0ea]">
                    {recipe.instructions.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-none font-black text-[#1e6bff]">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
