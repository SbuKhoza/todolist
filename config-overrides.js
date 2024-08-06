const webpack = require('webpack');

module.exports = function override(config, env) {
  
  config.resolve.fallback = {
    "fs": require.resolve("browserify-fs"),
    "path": require.resolve("path-browserify")
  };
  
  return config;
};
