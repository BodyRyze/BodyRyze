import { Objectif, Recipe, recipes } from "@/data/recipes";

export type RecipeMatch = {
  recipe: Recipe;
  missing: string[];
  score: number;
};

// Enlève les accents et met en minuscule pour que "poulet"/"Poulet"/"poulét" matchent pareil.
const DIACRITICS = /[̀-ͯ]/g;

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(DIACRITICS, "")
    .toLowerCase()
    .trim();
}

export function findMatches(
  userIngredients: string[],
  objectif: Objectif | "all",
  limit = 3
): RecipeMatch[] {
  const userSet = new Set(userIngredients.map(normalize).filter(Boolean));
  if (userSet.size === 0) return [];

  const pool = objectif === "all" ? recipes : recipes.filter((r) => r.objectif === objectif);

  const matches: RecipeMatch[] = pool.map((recipe) => {
    const missing = recipe.ingredients.filter((ing) => !userSet.has(normalize(ing)));
    const owned = recipe.ingredients.length - missing.length;
    // Score = proportion d'ingrédients possédés (0 à 1). Une recette complète (missing = 0) gagne toujours.
    const score = owned / recipe.ingredients.length;
    return { recipe, missing, score };
  });

  return matches
    .filter((m) => m.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.missing.length - b.missing.length;
    })
    .slice(0, limit);
}
