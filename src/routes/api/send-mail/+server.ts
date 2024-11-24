import sgMail from "@sendgrid/mail";

import { SENDGRID_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return json(
      { message: "Could not send email. Missing data" },
      { status: 400 }
    );
  }

  const emailData = {
    to: "mian.lopezjimenez@gmail.com",
    from: "mian.lopezjimenez@gmail.com",
    subject: "New contact form on your portfolio",
    html: `Somebody is reaching out to you! <br><br> Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
  };

  try {
    await sgMail.send(emailData);

    return json({ success: true });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
}
