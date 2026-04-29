// Deno server to serve index.html

Deno.serve({ port: 8000 }, async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    try {
      const html = await Deno.readFile("./index.html");
      return new Response(html, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    } catch (e) {
      return new Response("Error: index.html not found", { status: 404 });
    }
  }

  return new Response("Not found", { status: 404 });
});
