import { serveHTML } from "../server";
import { resolve } from "path";

// Types pour les routes
type Handler = (req: Request) => Promise<Response> | Response;

type Route = {
  method: string;
  path: string | RegExp;
  response: string;
  handler?: Handler;
};

// Tableau des routes
const routes: Route[] = [
  {
    method: "GET",
    path: "/",
    response: "Page d'accueil",
    handler: async (req: Request) => {
      const fullPath = resolve(__dirname, "../index.html");
      return serveHTML(fullPath);
    },
  },
  { method: "GET", path: "/health", response: "Le serveur fonctionne" },
  {
    method: "GET",
    path: "/developpement-web",
    response: "Développement Web",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/developpement-web.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/vie-quotidienne",
    response: "Vie Quotidienne",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/vie-quotidienne.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/financier-trading",
    response: "Financier / Trading",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/financier-trading.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/sport-et-fitness",
    response: "Sport et Fitness",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/sport-et-fitness.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/technologie-et-innovation",
    response: "Technologie et Innovation",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/technologie-et-innovation.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/education-et-apprentissage",
    response: "Éducation et Apprentissage",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/education-et-apprentissage.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/voyage-et-aventure",
    response: "Voyage et Aventure",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/voyage-et-aventure.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/creativite-et-art",
    response: "Créativité et Art",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/creativite-et-art.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/entrepreneuriat",
    response: "Entrepreneuriat",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/entrepreneuriat.html"
      );
      return serveHTML(fullPath);
    },
  },
  {
    method: "GET",
    path: "/developpement-personnel",
    response: "Développement Personnel",
    handler: async (req: Request) => {
      const fullPath = resolve(
        __dirname,
        "../public/pages/developpement-personnel.html"
      );
      return serveHTML(fullPath);
    },
  },
];

export default routes;
