import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

const server = new Elysia();
const publicDir = "./public/pages";

// Servir les fichiers statiques depuis le répertoire "public/pages"
server.use(staticPlugin({ prefix: "/pub", assets: publicDir }));

// Définir des routes spécifiques qui pointent vers des fichiers HTML
const routesNames = ["", "login", "forum", "services"];
const routesInfos = routesNames.map((route) => {
  const fileName = route ? `${route}.html` : "index.html";
  return {
    route: "/" + (route || ""), // La route racine est "/"
    filePath: `${publicDir}/${fileName}`, // Chemin de fichier réel
  };
});

// Ajouter des routes spécifiques qui servent les fichiers HTML correspondants
for (const { route, filePath } of routesInfos) {
  server.get(route, async () => {
    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return new Response("File not found", { status: 404 });
    }
    return new Response(file, {
      headers: { "Content-Type": "text/html" },
    });
  });
}

// Gérer 404 pour les routes inconnues
server.all("*", () => {
  return new Response("Page not found", { status: 404 });
});

// Démarrer le serveur
const port = process.env.PORT || 5000;
server.listen(port);
console.log(`Server is running on http://localhost:${port}`);
