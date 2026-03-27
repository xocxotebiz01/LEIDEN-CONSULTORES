export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Guardar el email en tu lista de supresión
    // Ejemplo: DynamoDB, Google Sheets, o archivo en S3
    console.log("Baja solicitada:", email);

    res.status(200).json({ message: "Tu baja fue registrada con éxito." });
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
