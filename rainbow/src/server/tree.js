const _ = require('lodash');

const tree = files => {
    const createTree = (node, path) => {
        if (!path.length) {
            return;
        }

        node.children = node.children || [];
        const fragment = path.shift();
        let child = _.find(node.children, child => child.name === fragment);

        if (!child) {
            child = {
                name: fragment
            };
            node.children.push(child);
        }

        createTree(child, path);
    };

    const root = {
        name: 'root'
    };

    const paths = _.map(files, file =>
        file.split('/').filter(name => name.length)
    );

    _.each(paths, path => createTree(root, path));

    return root;
};

module.exports = tree;
