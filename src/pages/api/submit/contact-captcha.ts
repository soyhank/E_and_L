import type { APIRoute } from "astro";
import { GOOGLE_RECAPTCHA_PRIVATE_KEY } from "../../../data";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";

  const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const requestBody = new URLSearchParams({
    secret: GOOGLE_RECAPTCHA_PRIVATE_KEY, // Esto puede ser una variable de entorno
    response: body.recaptcha, // El token pasado desde el cliente
  });

  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString(),
  });

  const responseData = await response.json();

  if (!responseData.success) {
    return new Response(
      JSON.stringify({
        error: true,
        message: {
          title: "Error sending form",
          content: "Captcha verification failed",
        },
      })
    );
  }

  return new Response(
    JSON.stringify({
      error: false,
    })
  );
};
