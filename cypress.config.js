require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://houzyk.github.io/houzair/",
    env: {
      CWV_API_KEY: process.env.CWV_API_KEY
    }
  },
});
