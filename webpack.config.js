const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "fs": require.resolve("browserify-fs"),
      "path": require.resolve("path-browserify")
    }
  },
  // Other configurations...
};
