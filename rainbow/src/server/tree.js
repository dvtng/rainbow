const _ = require('lodash');

const isLeaf = node => !node.children || !node.children.length;
const hasOnlyChild = node => node.children && node.children.length === 1;

const collapsePaths = node => {
    if (isLeaf(node)) {
        return node;
    }

    // has only child and only child is not a leaf
    if (hasOnlyChild(node)) {
        const onlyChild = node.children[0];

        return isLeaf(onlyChild)
            ? node
            : collapsePaths({
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

const tree = (files, rootName) => {
    const root = {
        name: rootName
    };

    _.each(files, file => {
        const path = file.split('/').filter(name => name.length);
        createTree(root, path);
    });

    return root;
};

const collapsedTree = (files, rootName) => {
    let root = tree(files, rootName);
    root.children = _.map(root.children, child => collapsePaths(child));
    return root;
};

module.exports.tree = tree;
module.exports.collapsedTree = collapsedTree;
