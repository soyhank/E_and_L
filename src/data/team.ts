import type { ImageMetadata } from "astro";
import luisLopez from "../assets/img/about/team/luis_lopez.png";
import jeinerRomero from "../assets/img/about/team/jeiner_romero.png";
import wilsonLopez from "../assets/img/about/team/wilson_lopez.png";
import darielPuerto from "../assets/img/about/team/dariel_puerto.png";
import marieyiSilva from "../assets/img/about/team/marieyi_silva.png";
import teresaRuiz from "../assets/img/about/team/teresa_ruiz.png";
import santosVilcachagua from "../assets/img/about/team/santos_vilcachagua.png";

export type Member = {
  name: string;
  title: string;
  image: ImageMetadata;
};

// Luis Lopez: Founder
// 1. Jeiner Romero: Carpenters/Installer
// 2. Wilson Lopez: Carpenters/Installer
// 3. Dariel Puerto: Carpenters/Installer
// Marieyi Silva: Costumer Services
// Teresa Ruiz: Finance & Operations Leader
// Santos Vilcachagua: Marketing & Client Relations

export const team: Member[] = [
  {
    name: "Luis Lopez",
    title: "Founder",
    image: luisLopez,
  },
  {
    name: "Jeiner Romero",
    title: "Carpenters/Installer",
    image: jeinerRomero,
  },
  {
    name: "Wilson Lopez",
    title: "Carpenters/Installer",
    image: wilsonLopez,
  },
  {
    name: "Dariel Puerto",
    title: "Carpenters/Installer",
    image: darielPuerto,
  },
  {
    name: "Marieyi (Gigi) Silva",
    title: "Customer Service Representative",
    image: marieyiSilva,
  },
  {
    name: "Teresa Ruiz",
    title: "Finance & Operations Leader",
    image: teresaRuiz,
  },
  {
    name: "Santos Vilcachagua",
    title: "Marketing & Client Relations",
    image: santosVilcachagua,
  },
];
