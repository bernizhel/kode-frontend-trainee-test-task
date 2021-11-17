const path = require('path');

function buildPathFromSource(...dirs) {
    return path.resolve(__dirname, path.join('src', ...dirs));
}

module.exports = {
    webpack: {
        alias: {
            '@blocks': buildPathFromSource('blocks'),
            '@app': buildPathFromSource('app'),
            '@fonts': buildPathFromSource('assets', 'fonts'),
            '@images': buildPathFromSource('assets', 'images'),
            '@styles': buildPathFromSource('styles'),
        },
    },
};
