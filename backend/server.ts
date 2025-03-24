import { Elysia } from "elysia";

interface Route {
  path: string;
  response: string;
  location?: string;
}

const racine: string = "http://localhost:5173"

// Tableau des routes
const routes: Route[] = [
  { path: "/", response: "Page d'accueil", location: "" },
  { path: "/developpement-web", response: "Développement Web", location: "" },
  { path: "/vie-quotidienne", response: "Vie Quotidienne", location: "" },
  { path: "/financier-trading", response: "Financier / Trading", location: "" },
  { path: "/sport-et-fitness", response: "Sport et Fitness", location: "" },
  {
    path: "/technologie-et-innovation",
    response: "Technologie et Innovation",
    location: "",
  },
  {
    path: "/education-et-apprentissage",
    response: "Éducation et Apprentissage",
    location: "",
  },
  { path: "/voyage-et-aventure", response: "Voyage et Aventure", location: "" },
  { path: "/creativite-et-art", response: "Créativité et Art", location: "" },
  { path: "/entrepreneuriat", response: "Entrepreneuriat", location: "" },
  {
    path: "/developpement-personnel",
    response: "Développement Personnel",
    location: "",
  },
  {
    path: "/test",
    response: "Ceci est un test",
    location: "/index.html",
  },
];

const app = new Elysia();

// Configuration des routes
routes.forEach((route) => {
  if (route.location) {
    // Si `location` est défini, on redirige
    app.get(route.path, ({ redirect }) => {
      return redirect(racine + route.location!);
    });
  } else {
    // Sinon, on renvoie simplement la réponse
    app.get(route.path, () => route.response);
  }
});

app.listen(3000);

console.log("Server is running on http://localhost:3000");
