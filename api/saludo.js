export default function handler(req, res) {
  res.status(200).json({
    mensaje: `Hola ${nombre}`,
    curso: "Ingeniería de Software II",
    timestamp: new Date().toISOString()
  });
}
