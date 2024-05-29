import type { ImageMetadata } from "astro";

import kitechImage from "../assets/img/services/kitchen.jpg";
import kitchenProjectsImage from "../assets/img/services/projects/kitchen.png";
import kitchenLargeYImage from "../assets/img/services/largeY/kitchen.jpg";

import basementImage from "../assets/img/services/basement.jpg";
import basementProjectsImage from "../assets/img/services/projects/basement.png";
import basementLargeYImage from "../assets/img/services/largeY/basement.png";

import bathroomImage from "../assets/img/services/bathroom.jpg";
import bathroomProjectsImage from "../assets/img/services/projects/bathroom.png";
import bathroomLargeYImage from "../assets/img/services/largeY/bathroom.png";

import exteriorImage from "../assets/img/services/exterior.jpg";
import exteriorProjectsImage from "../assets/img/services/projects/exterior.png";
import exteriorLargeYImage from "../assets/img/services/largeY/exterior.png";

import interiorImage from "../assets/img/services/interior.jpg";
import interiorProjectsImage from "../assets/img/services/projects/interior.png";
import interiorLargeYImage from "../assets/img/services/largeY/interior.png";

import deckImage from "../assets/img/services/deck.jpg";
import deckLargeYImage from "../assets/img/services/largeY/deck.png";

import creativeImage from "../assets/img/services/creative.webp";
import creativeLargeYImage from "../assets/img/services/largeY/creative.png";

import dwellingImage from "../assets/img/services/creative.webp";
import dwellingLargeYImage from "../assets/img/services/largeY/dwelling.png";

export type TService = {
  name: string;
  fullName: string;
  slug: string;
  excerpt: string;
  largeExcerpt?: string;
  description?: string;
  image?: ImageMetadata;
  imageProjects?: ImageMetadata;
  imageLargeY?: ImageMetadata;
  projectImage?: ImageMetadata;
};

export const serviceSlugs = {
  kitchen: "kitchen-remodeling",
  basement: "basement-remodel-or-accessory",
  bathroom: "bathroom-remodeling",
  exterior: "exterior-remodeling",
  interior: "interior-and-exterior-painting",
  deck: "deck-remodeling-and-new",
  creative: "specialty-and-creative-solutions",
  dwelling: "dwelling-addition",
  floor: "floor-renovation"
};

export const services: TService[] = [
  {
    name: "Floor Renovation",
    fullName: "Floor Renovation and new trim installation",
    slug: serviceSlugs.floor,
    excerpt:
      "Rediscover your kitchen's heart. Transform it into a harmonious hub of creativity and gatherings.",
    largeExcerpt:
      "Elevate your kitchen with our expert renovation services. From sleek countertops to innovative storage solutions, we'll transform your space into a stylish and functional hub for cooking and entertaining.",
    description: `Join our kitchen renovation expertise to transform your space. Our team of design experts create modern, functional custom kitchens. Combining style and functionality to make your kitchen the heart of your home.`,
    image: kitechImage,
    imageLargeY: kitchenLargeYImage,
    imageProjects: kitchenProjectsImage,
  },
  {
    name: "Kitchen Remodeling",
    fullName: "Kitchen Remodeling",
    slug: serviceSlugs.kitchen,
    excerpt:
      "Rediscover your kitchen's heart. Transform it into a harmonious hub of creativity and gatherings.",
    largeExcerpt:
      "Elevate your kitchen with our expert renovation services. From sleek countertops to innovative storage solutions, we'll transform your space into a stylish and functional hub for cooking and entertaining.",
    description: `Join our kitchen renovation expertise to transform your space. Our team of design experts create modern, functional custom kitchens. Combining style and functionality to make your kitchen the heart of your home.`,
    image: kitechImage,
    imageLargeY: kitchenLargeYImage,
    imageProjects: kitchenProjectsImage,
  },
  {
    name: "Basement Remodeling",
    fullName: "Basement Remodeling",
    slug: serviceSlugs.basement,
    excerpt:
      "Unlock the hidden potential below. Elevate your basement into a functional and inviting space.",
    largeExcerpt:
      "Unlock the potential of your basement with our professional renovation services. From cozy family rooms to practical storage solutions, we'll help you maximize space and create a versatile living area you'll love.",
    description:
      "Revitalize your basement with our specialized remodeling. We turn underutilized spaces into functional, livable areas. Our meticulous design approach and commitment to enhancing your home's beauty ensure innovation that exceeds expectations with precision and creativity.",
    image: basementImage,
    imageLargeY: basementLargeYImage,
    imageProjects: basementProjectsImage,
  },
  {
    name: "Bathroom Remodeling",
    fullName: "Bathroom Remodeling",
    slug: serviceSlugs.bathroom,
    excerpt:
      "Transform your daily routine. Turn your bathroom into a spacious and comfortable sanctuary.",
    largeExcerpt:
      "Transform your bathroom into a sanctuary with our renovation expertise. Whether you're seeking a sleek, contemporary look or a cozy, rustic retreat, we'll bring your vision to life with high-quality materials and skilled craftsmanship. From updated fixtures to custom tile work, we'll create a space that reflects your personal style and enhances your daily routine.",
    description:
      "Upgrade your bathroom with elegance and comfort. We work together to create the perfect bathroom, maximizing space and functionality with personalized craftsmanship and meticulous attention to detail.",
    image: bathroomImage,
    imageLargeY: bathroomLargeYImage,
    imageProjects: bathroomProjectsImage,
  },
  {
    name: "Exterior Remodeling",
    fullName: "Exterior Remodeling",
    slug: serviceSlugs.exterior,
    excerpt:
      "Boost curb appeal and function. Elevate your home's exterior with aesthetic enhancements.",
    description:
      "Revitalize your home with our exterior remodeling. We enhance architectural features, update siding and roofing for a modern and lasting appearance.",
    image: exteriorImage,
    imageLargeY: exteriorLargeYImage,
    imageProjects: exteriorProjectsImage,
  },
  {
    name: "Interior and Exterior Painting",
    fullName: "Interior and Exterior Painting",
    slug: serviceSlugs.interior,
    excerpt:
      "Redesign living spaces with elegance. Reimagine your home's interiors through our craftsmanship",
    image: interiorImage,
    imageLargeY: interiorLargeYImage,
    description:
      "Renew your spaces with our professional painting. Experts in interiors and exteriors, we use high quality paint materials that provide an attractive and impeccable finish.",
    imageProjects: interiorProjectsImage,
  },
  {
    name: "Deck Remodeling",
    fullName: "Deck Remodeling and New",
    slug: serviceSlugs.deck,
    excerpt:
      "Whether upgrading an existing deck or crafting a new one, expect visually stunning, durable outdoor spaces.",
    image: deckImage,
    imageLargeY: deckLargeYImage,
    description:
      "Transform your outdoor living with our deck remodeling. We renovate and create new designs with quality and personalized design.",
  },
  {
    name: "Creative Solutions",
    fullName: "Creative Solutions",
    slug: serviceSlugs.creative,
    excerpt:
      "We offer a wide variety of services and solutions for your home and business. From design and construction to installation and maintenance.",
    image: creativeImage,
    imageLargeY: creativeLargeYImage,
    description:
      "Do you have a unique vision? Our creative and specialized solutions bring it to life. From custom designs to innovative problem-solving, we guarantee results that exceed expectations.",
  },
  {
    name: "Dwelling Addition",
    fullName: "Dwelling Addition",
    slug: serviceSlugs.dwelling,
    excerpt:
      "We offer a wide variety of services and solutions for your home and business. From design and construction to installation and maintenance.",
    image: dwellingImage,
    imageLargeY: dwellingLargeYImage,
    description:
      "Expand your home with our comprehensive services. We guarantee a perfect and functional contribution, adapted to the needs you need.",
  },
];

export const servicesObject = services.reduce((obj, service) => {
  obj[service.slug] = service;
  return obj;
}, {} as { [key: string]: TService });
