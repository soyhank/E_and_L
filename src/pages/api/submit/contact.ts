import type { APIRoute } from "astro";
import { z } from "astro/zod";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(6).email({ message: "Invalid email address" }),
  phone: z.coerce.number().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zip: z.coerce.number().min(1, { message: "Zip code is required" }),
  preferContact: z.string().min(1, { message: "Prefer contact is required" }),
  howHearAboutUs: z
    .string()
    .min(1, { message: "How did you hear about us is required" }),
  services: z.array(z.string()).min(1, { message: "Services is required" }),
  details: z.string(),
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
            name: parsed.data.firstName,
            last_name: parsed.data.lastName,
            city: parsed.data.city,
            phone: parsed.data.phone,
            state: parsed.data.state,
            z_i_p: parsed.data.zip,
          },
          groups: [import.meta.env.MAILERLITE_GROUPID_CONTACT],
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
