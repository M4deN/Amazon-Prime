const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,

})