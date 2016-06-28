var loadImages = require.context('images', true, /^\.\/.*\.(png|jpg|svg|gif)$/);


module.exports = loadImages;