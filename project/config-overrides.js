const {alias} = require('react-app-rewire-alias')

const options = {
    '@components':'src/components',
} 


module.exports = function override(config, env) {
    alias(options)(config);
    return config;
  }
