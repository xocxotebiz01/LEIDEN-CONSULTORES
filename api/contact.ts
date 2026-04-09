import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, organizacion, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zeptomail.com',
      port: 587, // usar 465 si preferís SSL
      secure: false, // true si usás puerto 465
      auth: {
        user: 'emailapikey',
        pass: process.env.ZEPTO_API_KEY!, // tu API key guardada en variables de entorno
      },
    });

    await transporter.sendMail({
      from: 'contacto@leiden.com.ar', // remitente verificado en ZeptoMail
      to: process.env.EMAIL_TO || 'contacto@leiden.com.ar', // destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nOrganización: ${organizacion}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error ZeptoMail:', error);
    return res.status(500).json({ error: 'Error enviando el correo' });
  }
}
