module.exports = ({ filename, port }) => ({
    entry: [`webpack-dev-server/client?http://localhost:${port}/`, filename],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'story.js',
        libraryTarget: 'var',
        library: 'stories'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
});
