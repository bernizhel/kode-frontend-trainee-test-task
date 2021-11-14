const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@blocks': path.resolve(__dirname, path.join('src', 'blocks')),
            '@fonts': path.resolve(
                __dirname,
                path.join('src', 'assets', 'fonts'),
            ),
            '@src': path.resolve(__dirname, 'src'),
        },
    },
};
