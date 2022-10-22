import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Guide",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "About Pojavlauncher",
      icon: "note",
      prefix: "about-pojavlauncher/",
      children: "structure",
    },
    {
      text: "Updates",
      icon: "note",
      prefix: "updates/",
      children: "structure",
    },
    {
      text: "contribution",
      icon: "note",
      prefix: "contribution/",
      children: "structure",
    },
    "slides",
  ],
});
