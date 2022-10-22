import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
  },
      {
        text: "About PojavLauncher",
        icon: "creative",
        prefix: "about-pojavlauncher/",
        children: ["legal", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Updates",
        icon: "config",
        prefix: "updates/",
        children: ["pojavisnotonplaystore", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Contribution",
        icon: "config",
        prefix: "contribution/",
        children: ["pojavisnotonplaystore", { text: "...", icon: "more", link: "" }],
      },
]);
