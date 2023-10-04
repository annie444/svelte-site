import { SMTPClient, Message } from "emailjs";
import { f as fail } from "../../../chunks/index.js";
import { b as private_env } from "../../../chunks/shared-server.js";
const send = async ({ request }) => {
  const data = await request.formData();
  if (!data) {
    return fail(400, { message: "Invalid email" });
  }
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const body = data.get("body");
  if (!name || typeof name !== "string" || name === "") {
    return fail(400, { message: "Please fill out your name" });
  }
  if (!body || typeof body !== "string" || body === "") {
    return fail(400, { message: "Please add a message" });
  }
  if (!email || typeof email !== "string" || email === "") {
    return fail(400, { message: "Please add an email I can get back to you at" });
  }
  if (subject && typeof subject !== "string") {
    return fail(400, { message: "Invalid subject text" });
  }
  const client = new SMTPClient({
    user: private_env.PERSONAL,
    password: private_env.PASSWORD,
    host: private_env.SMTP_SERVER,
    port: Number(private_env.SMTP_PORT),
    tls: true
  });
  const message = new Message({
    data: body,
    from: `AnnieEhler.com <${private_env.EMAIL}>`,
    to: `Annie <${private_env.PERSONAL}>`,
    cc: `${name} <${email}>`,
    subject: `Let's Connect! - ${subject}`
  });
  const { isValid, validationError } = message.checkValidity();
  if (isValid) {
    try {
      await client.sendAsync(message);
    } catch (e) {
      return fail(500, { message: e });
    }
  } else {
    return fail(400, { message: validationError });
  }
  return 200;
};
const actions = { send };
export {
  actions
};
