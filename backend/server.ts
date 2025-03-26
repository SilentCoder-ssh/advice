import routes from "./utils/routes";

// Config du server
const PORT = 3000;
const HOST = "localhost";

// Fonction pour servir des fichier HTML
export async function serveHTML(filePath: string): Promise<Response> {
  console.log("Trying to load:", filePath); // Debug
  try {
    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file, { headers: { "Content-Type": "text/html" } });
    }
    console.error("File not found:", filePath); // Debug
    return new Response("Page not found", { status: 404 });
  } catch (error) {
    console.error("Error loading HTML:", error); // Debug
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Function pour servir des assets statiques
async function serveStatic(
  filePath: string,
  contentType: string
): Promise<Response> {
  try {
    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file, {
        headers: { "Content-Type": contentType },
      });
    }
    return new Response("Not Found", { status: 404 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Création du server
const server = Bun.serve({
  port: PORT,
  hostname: HOST,
  async fetch(req) {
    const url = new URL(req.url);
    const route = routes.find(
      (r) =>
        r.method === req.method &&
        (typeof r.path === "string"
          ? r.path === url.pathname
          : r.path?.test(url.pathname))
    );

    if(route && route.handler) {
      return route.handler(req)
    }

    return new Response ("Not Found", {status: 404})
  },
  error(error) {
    return new Response ("Internal Server Error", {status: 500})
  }
});

console.log(`Server running at http://${server.hostname}:${server.port}`)
