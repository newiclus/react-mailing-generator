const INDEX_HTML = "./basic.html";

const server = Bun.serve({
  port: 5050,
  fetch(req: Request) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(Bun.file(INDEX_HTML), {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    throw new Error("woops!");
  },
  error(error: Error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Server is running on port ${server.port}`);
