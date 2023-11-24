async function deviceRoutes(fastify, options) {
  fastify.get("/device/check", async (req, res) => {
    const { timeout = 3000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    await fetch("http://192.168.137.90:80/ESPRequest", {
      ...options,
      signal: controller.signal,
    })
      .then((response) => {
        clearTimeout(id);
        res.code(200).send(true);
      })
      .catch((err) => {
        clearTimeout(id);
        res.code(200).send(false);
      });
  });
}

export default deviceRoutes;
