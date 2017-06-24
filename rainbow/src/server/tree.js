const _ = require('lodash');

const isLeaf = node => !node.children || !node.children.length;
const hasOnlyChild = node => node.children && node.children.length === 1;

const collapsePaths = node => {
    if (isLeaf(node)) {
        return node;
    }

    // has only child and only child is not a leaf
    if (hasOnlyChild(node) && !isLeaf(node.children[0])) {
        const onlyChild = node.children[0];
        return collapsePaths({
            name: node.name + '/' + onlyChild.name,
            children: onlyChild.children
        });
    }

    // has multiple children
    return {
        name: node.name,
        children: _.map(node.children, child => collapsePaths(child))
    };
};

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

const collapsedTree = files => {
    let root = tree(files);
    root.children = _.map(root.children, child => collapsePaths(child));
    return root;
};

module.exports.tree = tree;
module.exports.collapsedTree = collapsedTree;
