const path = require('path');

module.exports = {
    // outras configurações do webpack
    resolve: {
        fallback: {
            os: require.resolve('os-browserify/browser')
        },
        alias: {
            fs: path.resolve(__dirname, './empty.js') // resolver o problema com 'fs'
        }
    }
};
