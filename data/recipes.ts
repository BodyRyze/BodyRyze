export type Objectif = "prise-de-masse" | "seche" | "healthy";

export type Recipe = {
  id: string;
  nom: string;
  objectif: Objectif;
  ingredients: string[];
  calories: number;
  proteines: number;
  temps: string;
  instructions: string[];
};

export const OBJECTIF_LABELS: Record<Objectif, string> = {
  "prise-de-masse": "Prise de masse",
  seche: "Sèche",
  healthy: "Healthy",
};

export const recipes: Recipe[] = [
  // ---------- PRISE DE MASSE ----------
  {
    id: "pdm-1",
    nom: "Riz au poulet et beurre de cacahuète",
    objectif: "prise-de-masse",
    ingredients: ["riz", "poulet", "beurre de cacahuete", "oignon", "sauce soja"],
    calories: 780,
    proteines: 55,
    temps: "25 min",
    instructions: [
      "Cuis le riz dans de l'eau bouillante salée.",
      "Coupe le poulet en dés et fais-le dorer avec l'oignon émincé.",
      "Ajoute une cuillère de beurre de cacahuète et un trait de sauce soja, mélange sur feu doux.",
      "Sers le poulet sur le riz.",
    ],
  },
  {
    id: "pdm-2",
    nom: "Pâtes bolognaise renforcées",
    objectif: "prise-de-masse",
    ingredients: ["pates", "boeuf hache", "tomate", "oignon", "fromage rape"],
    calories: 820,
    proteines: 48,
    temps: "30 min",
    instructions: [
      "Fais revenir l'oignon émincé puis ajoute le bœuf haché.",
      "Ajoute la tomate (concassée ou en sauce) et laisse mijoter 15 minutes.",
      "Cuis les pâtes al dente et mélange avec la sauce.",
      "Termine avec une bonne dose de fromage râpé.",
    ],
  },
  {
    id: "pdm-3",
    nom: "Omelette avocat-fromage sur pain complet",
    objectif: "prise-de-masse",
    ingredients: ["oeuf", "avocat", "fromage", "pain complet"],
    calories: 650,
    proteines: 34,
    temps: "12 min",
    instructions: [
      "Bats 3-4 œufs et fais une omelette à la poêle.",
      "Ajoute le fromage râpé en fin de cuisson pour qu'il fonde.",
      "Écrase l'avocat sur les tranches de pain complet grillées.",
      "Sers l'omelette sur le pain à l'avocat.",
    ],
  },
  {
    id: "pdm-4",
    nom: "Riz cantonais au boeuf et oeuf",
    objectif: "prise-de-masse",
    ingredients: ["riz", "boeuf hache", "oeuf", "petits pois", "sauce soja", "oignon"],
    calories: 750,
    proteines: 50,
    temps: "25 min",
    instructions: [
      "Cuis le riz puis laisse-le refroidir légèrement.",
      "Fais revenir le bœuf haché et l'oignon dans une poêle bien chaude.",
      "Pousse sur le côté, casse les œufs dans la poêle et brouille-les.",
      "Ajoute le riz, les petits pois et la sauce soja, mélange 3-4 minutes à feu vif.",
    ],
  },
  {
    id: "pdm-5",
    nom: "Wrap thon-riz-fromage",
    objectif: "prise-de-masse",
    ingredients: ["tortilla", "thon", "riz", "fromage", "mayonnaise"],
    calories: 700,
    proteines: 45,
    temps: "10 min",
    instructions: [
      "Mélange le thon égoutté avec le riz cuit et un peu de mayonnaise.",
      "Ajoute le fromage râpé sur la tortilla.",
      "Dépose la garniture et roule bien serré.",
      "Passe 2 minutes à la poêle pour dorer le wrap (optionnel).",
    ],
  },
  {
    id: "pdm-6",
    nom: "Patates douces au boeuf et fromage",
    objectif: "prise-de-masse",
    ingredients: ["patate douce", "boeuf hache", "fromage", "oignon"],
    calories: 690,
    proteines: 42,
    temps: "35 min",
    instructions: [
      "Cuis les patates douces coupées en cubes au four ou à la vapeur.",
      "Fais revenir le bœuf haché avec l'oignon émincé.",
      "Mélange le tout dans un plat et recouvre de fromage râpé.",
      "Passe 5 minutes au four pour gratiner.",
    ],
  },

  // ---------- SECHE ----------
  {
    id: "seche-1",
    nom: "Poulet grillé, brocolis et riz",
    objectif: "seche",
    ingredients: ["poulet", "brocoli", "riz", "citron"],
    calories: 420,
    proteines: 45,
    temps: "20 min",
    instructions: [
      "Fais griller le poulet à la poêle avec un filet de citron.",
      "Cuis les brocolis à la vapeur 8-10 minutes.",
      "Cuis le riz (petite quantité) en accompagnement.",
      "Assaisonne avec du citron et du poivre.",
    ],
  },
  {
    id: "seche-2",
    nom: "Œufs brouillés et épinards",
    objectif: "seche",
    ingredients: ["oeuf", "epinard", "oignon"],
    calories: 320,
    proteines: 26,
    temps: "10 min",
    instructions: [
      "Fais revenir l'oignon émincé puis ajoute les épinards jusqu'à ce qu'ils réduisent.",
      "Bats les œufs et verse-les dans la poêle.",
      "Mélange doucement à feu moyen jusqu'à cuisson souhaitée.",
      "Assaisonne avec sel et poivre.",
    ],
  },
  {
    id: "seche-3",
    nom: "Salade de thon et haricots verts",
    objectif: "seche",
    ingredients: ["thon", "haricots verts", "tomate", "citron"],
    calories: 340,
    proteines: 38,
    temps: "10 min",
    instructions: [
      "Cuis les haricots verts à la vapeur 8 minutes puis laisse refroidir.",
      "Coupe les tomates en quartiers.",
      "Mélange le thon égoutté, les haricots verts et les tomates.",
      "Assaisonne avec du jus de citron.",
    ],
  },
  {
    id: "seche-4",
    nom: "Dinde poêlée et courgettes",
    objectif: "seche",
    ingredients: ["dinde", "courgette", "oignon", "citron"],
    calories: 380,
    proteines: 44,
    temps: "20 min",
    instructions: [
      "Coupe la dinde en lamelles et fais-la dorer à la poêle.",
      "Ajoute l'oignon émincé et les courgettes coupées en rondelles.",
      "Laisse cuire 10 minutes à feu moyen en remuant.",
      "Termine avec un filet de citron.",
    ],
  },
  {
    id: "seche-5",
    nom: "Fromage blanc, concombre et thon",
    objectif: "seche",
    ingredients: ["fromage blanc", "concombre", "thon"],
    calories: 280,
    proteines: 36,
    temps: "5 min",
    instructions: [
      "Coupe le concombre en petits dés.",
      "Mélange le fromage blanc, le thon égoutté et le concombre.",
      "Assaisonne avec sel, poivre et herbes si tu en as.",
    ],
  },
  {
    id: "seche-6",
    nom: "Poêlée de crevettes et courgettes",
    objectif: "seche",
    ingredients: ["crevettes", "courgette", "ail", "citron"],
    calories: 310,
    proteines: 33,
    temps: "15 min",
    instructions: [
      "Fais revenir l'ail émincé dans un peu d'huile.",
      "Ajoute les courgettes coupées en dés et fais cuire 5 minutes.",
      "Ajoute les crevettes et cuis 4-5 minutes jusqu'à ce qu'elles rosissent.",
      "Termine avec un filet de citron.",
    ],
  },

  // ---------- HEALTHY ----------
  {
    id: "healthy-1",
    nom: "Bowl quinoa, avocat et oeuf",
    objectif: "healthy",
    ingredients: ["quinoa", "avocat", "oeuf", "tomate"],
    calories: 480,
    proteines: 22,
    temps: "20 min",
    instructions: [
      "Cuis le quinoa selon les instructions du paquet.",
      "Fais cuire un œuf mollet ou au plat.",
      "Coupe l'avocat et la tomate en dés.",
      "Assemble le tout dans un bol, assaisonne à ton goût.",
    ],
  },
  {
    id: "healthy-2",
    nom: "Soupe de légumes maison",
    objectif: "healthy",
    ingredients: ["carotte", "pomme de terre", "oignon", "poireau"],
    calories: 220,
    proteines: 6,
    temps: "30 min",
    instructions: [
      "Épluche et coupe tous les légumes en morceaux.",
      "Fais-les revenir 5 minutes dans une casserole avec un peu d'huile.",
      "Couvre d'eau et laisse mijoter 20 minutes.",
      "Mixe jusqu'à obtenir une texture lisse.",
    ],
  },
  {
    id: "healthy-3",
    nom: "Salade tomate-mozzarella-avocat",
    objectif: "healthy",
    ingredients: ["tomate", "mozzarella", "avocat", "basilic"],
    calories: 390,
    proteines: 18,
    temps: "10 min",
    instructions: [
      "Coupe les tomates, la mozzarella et l'avocat en tranches.",
      "Dispose-les en alternance dans une assiette.",
      "Ajoute quelques feuilles de basilic.",
      "Assaisonne avec un filet d'huile d'olive.",
    ],
  },
  {
    id: "healthy-4",
    nom: "Poêlée de légumes et pois chiches",
    objectif: "healthy",
    ingredients: ["pois chiches", "poivron", "courgette", "oignon"],
    calories: 410,
    proteines: 17,
    temps: "20 min",
    instructions: [
      "Coupe le poivron, la courgette et l'oignon en dés.",
      "Fais-les revenir 10 minutes dans une poêle.",
      "Ajoute les pois chiches égouttés et poursuis la cuisson 5 minutes.",
      "Assaisonne avec les épices de ton choix.",
    ],
  },
  {
    id: "healthy-5",
    nom: "Wrap poulet-crudités",
    objectif: "healthy",
    ingredients: ["tortilla", "poulet", "salade", "tomate", "carotte"],
    calories: 440,
    proteines: 32,
    temps: "15 min",
    instructions: [
      "Fais cuire le poulet à la poêle puis coupe-le en lamelles.",
      "Râpe la carotte et coupe la tomate et la salade.",
      "Dispose la garniture sur la tortilla.",
      "Roule bien serré et coupe en deux.",
    ],
  },
  {
    id: "healthy-6",
    nom: "Riz complet, brocolis et pois chiches",
    objectif: "healthy",
    ingredients: ["riz complet", "brocoli", "pois chiches", "citron"],
    calories: 460,
    proteines: 19,
    temps: "25 min",
    instructions: [
      "Cuis le riz complet selon les instructions du paquet.",
      "Cuis les brocolis à la vapeur 8 minutes.",
      "Réchauffe les pois chiches égouttés à la poêle.",
      "Mélange le tout et assaisonne avec du citron.",
    ],
  },
];
