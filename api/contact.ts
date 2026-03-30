import type { NextApiRequest, NextApiResponse } from 'next';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION, // ej: "us-east-2"
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, organizacion, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const command = new SendEmailCommand({
      Source: process.env.EMAIL_FROM, // ej: contacto@leiden.com.ar
      Destination: {
        ToAddresses: [process.env.EMAIL_TO || 'contacto@leiden.com.ar'],
      },
      Message: {
        Subject: { Data: `Nuevo mensaje de ${nombre}` },
        Body: {
          Text: {
            Data: `Nombre: ${nombre}\nOrganización: ${organizacion}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
          },
        },
      },
    });

    await ses.send(command);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error SES:', error);
    return res.status(500).json({ error: 'Error enviando el correo' });
  }
}
