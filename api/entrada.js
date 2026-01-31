export default async function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  const response = await fetch(
    `${req.headers.origin}/api/procesar?nombre=${nombre}`
  );

  const data = await response.json();

  res.status(200).json({
    entrada: nombre,
    resultado: data.resultado,
    flujo: "entrada → procesar"
  });
}
