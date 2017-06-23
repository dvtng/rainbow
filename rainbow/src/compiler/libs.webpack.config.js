const path = require('path');

module.exports = {
    entry: [path.join(__dirname, 'libs.js')],
    output: {
        path: path.join(__dirname, '../../build'),
        filename: 'libs.js'
    }
};
