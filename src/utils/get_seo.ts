import type { SEOProps } from "astro-seo";
import { projects, services } from "../data";

export const getServiceSeo = (slug: string) => {
  const service = services.find((service) => service.slug === slug)!;

  const title = service.name + " - E and L Home Improvements";
  const description = service.description;
  const image = service.image?.src!;

  const seo: SEOProps = {
    title,
    description,
    openGraph: {
      basic: {
        title,
        type: "website",
        image,
      },
      image: {
        url: image,
        width: 1200,
        height: 628,
      },
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      image,
      imageAlt: title,
    },
  };

  return seo;
};

export const getProjectSeo = (slug: string) => {
  const project = projects.find((project) => project.slug === slug)!;

  const title = project.name + " - Project - E and L Home Improvements";
  const description = project.name + " " + project.date.toString();
  const image = project.image;

  const seo: SEOProps = {
    title,
    description,
    openGraph: {
      basic: {
        title,
        type: "website",
        image,
      },
      image: {
        url: image,
        width: 1200,
        height: 628,
      },
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      image,
      imageAlt: title,
    },
  };

  return seo;
};
