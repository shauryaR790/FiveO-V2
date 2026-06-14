import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type TechGridItem = {
  name: string;
  Icon: IconType;
  colorClass: string;
};

export const TECH_ROW_TOP: TechGridItem[] = [
  { name: "JavaScript", Icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
  { name: "HTML5", Icon: SiHtml5, colorClass: "text-[#E34F26]" },
  { name: "CSS3", Icon: SiCss, colorClass: "text-[#1572B6]" },
  { name: "TypeScript", Icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { name: "React", Icon: SiReact, colorClass: "text-[#61DAFB]" },
  { name: "Node.js", Icon: SiNodedotjs, colorClass: "text-[#339933]" },
  { name: "Git", Icon: SiGit, colorClass: "text-[#F05032]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
];

export const TECH_ROW_BOTTOM: TechGridItem[] = [
  { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-[#ffffff]" },
  { name: "Vite", Icon: SiVite, colorClass: "text-[#646CFF]" },
  { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-[#4169E1]" },
  { name: "MongoDB", Icon: SiMongodb, colorClass: "text-[#47A248]" },
  { name: "Docker", Icon: SiDocker, colorClass: "text-[#2496ED]" },
  { name: "Figma", Icon: SiFigma, colorClass: "text-[#F24E1E]" },
  { name: "GraphQL", Icon: SiGraphql, colorClass: "text-[#E10098]" },
  { name: "Sass", Icon: SiSass, colorClass: "text-[#CC6699]" },
];
