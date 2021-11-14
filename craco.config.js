const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@blocks': path.resolve(__dirname, path.join('src', 'blocks')),
            '@fonts': path.resolve(
                __dirname,
                path.join('src', 'assets', 'fonts'),
            ),
            '@images': path.resolve(
                __dirname,
                path.join('src', 'assets', 'images'),
            ),
            '@styles': path.resolve(__dirname, path.join('src', 'styles')),
        },
    },
};
