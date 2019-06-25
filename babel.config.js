module.exports = {
  env: {
    development: {
      presets: ["next/babel"]
    },
    production: {
      presets: ["next/babel"]
    },
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ]
    }
  }
};
