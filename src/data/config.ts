const APP_BASE_URL = import.meta.env.PUBLIC_APP_BASE_URL;

export const GOOGLE_RECAPTCHA_PRIVATE_KEY = import.meta.env
  .GOOGLE_RECAPTCHA_PRIVATE_KEY;
export const GOOGLE_RECAPTCHA_PUBLIC_KEY = import.meta.env
  .PUBLIC_APP_GOOGLE_RECAPTCHA_PUBLIC_KEY;

export const config = {
  APP_BASE_URL,
  contact: {
    address: {
      streetAddress: "17214 Emerson Dr",
      addressLocality: "Silver Spring",
      addressRegion: "MD",
      postalCode: "20905",
      addressCountry: "US",
    },
    email: {
      contact: "info@eandlhomeimprovementsllc.com",
      customer: "gigi@eandlhomeimprovementsllc.com",
    },
    phone: {
      formatted: "(301) 309 0472",
      value: 13013090472,
    },
  },
  networks: {
    fb: "https://www.facebook.com/eandlhomeimprovementsllc",
    instagram: "https://www.instagram.com/eandlhomeimprovements/",
  },
};

export const SMTP = {
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASS as string,
  },
};
