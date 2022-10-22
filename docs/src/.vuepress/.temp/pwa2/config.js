import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/vuepress/create/docs/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.113/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/vuepress/create/docs/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.113/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});