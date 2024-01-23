import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
  env: {
    baseUrl: "localhost:4200"
  }
});
