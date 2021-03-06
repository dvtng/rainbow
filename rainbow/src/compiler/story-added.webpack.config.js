module.exports = ({ port, filename }) => ({
    entry: [
        `${require.resolve(
            'webpack-dev-server/client'
        )}?http://localhost:${port}/`,
        // A generated file that then imports the story file
        filename
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: '[hash].js',
        libraryTarget: 'var',
        library: 'stories'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
});
