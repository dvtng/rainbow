module.exports = filename => ({
    entry: [filename],
    output: {
        path: '/',
        filename: 'story.js',
        libraryTarget: 'var',
        library: 'story'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
});
