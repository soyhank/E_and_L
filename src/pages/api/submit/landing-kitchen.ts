import type { APIRoute } from "astro";
import { z } from "astro/zod";

const LANDING_KITCHEN_GROUP = "119365035287905978";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(4, { message: "Name is invalid" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(8, { message: "Email is invalid" }),
  state: z
    .string({
      required_error: "State is required",
    })
    .min(2, { message: "State is invalid" }),
  zip: z
    .string({
      required_error: "Zip is required",
    })
    .min(4, { message: "Zip is invalid" }),
  phone: z
    .string({
      required_error: "Phone is required",
    })
    .min(4, { message: "Phone is invalid" }),
  message: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: true,
          message: {
            title: "Invalid form data",
            content: parsed.error.errors.map((err) => err.message).join(", "),
            fieldErrors: parsed.error.formErrors.fieldErrors,
          },
          body: parsed.error.issues,
        })
      );
    }

    const { data: mailerLiteResult } = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.MAILERLITE_API_TOKEN}`,
        },
        body: JSON.stringify({
          email: parsed.data.email,
          fields: {
            ...parsed.data,
            name: parsed.data.name,
            phone: parsed.data.phone,
            state: parsed.data.state,
            z_i_p: parsed.data.zip,
          },
          groups: [LANDING_KITCHEN_GROUP],
        }),
      }
    ).then((res) => res.json());

    if (!mailerLiteResult) {
      return new Response(
        JSON.stringify({
          error: true,
          message: {
            title: "Error sending form",
            content: "Something went wrong, please try again",
          },
        })
      );
    }

    return new Response(
      JSON.stringify({
        message: {
          title: "Thank you for your message",
          content: "We will get back to you as soon as possible",
        },
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: true,
        body: error,
        message: {
          title: "Error sending form",
          content: "Something went wrong, please try again",
        },
      })
    );
  }
};
