const { describe, it } = require('mocha');
const { expect } = require('chai');
const { tree, collapsedTree } = require('./tree');

describe('tree test', () => {
    it('should turn single path into tree', () => {
        const paths = ['dir1/dir2/foo.js'];

        const expectedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1',
                    children: [
                        {
                            name: 'dir2',
                            children: [
                                {
                                    name: 'foo.js'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        expect(tree(paths, 'root')).to.deep.equal(expectedTree);
    });

    it('should turn multiple paths into tree', () => {
        const paths = ['dir1/dir2/foo.js', 'dir1/bar.js', 'cat.js'];

        const expectedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1',
                    children: [
                        {
                            name: 'dir2',
                            children: [
                                {
                                    name: 'foo.js'
                                }
                            ]
                        },
                        {
                            name: 'bar.js'
                        }
                    ]
                },
                {
                    name: 'cat.js'
                }
            ]
        };
        expect(tree(paths, 'root')).to.deep.equal(expectedTree);
    });

    it('should turn paths with depth of 3 into tree', () => {
        const paths = ['dir1/dir2/dir3/foo.js', 'dir1/dir2/bar.js'];

        const expectedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1',
                    children: [
                        {
                            name: 'dir2',
                            children: [
                                {
                                    name: 'dir3',
                                    children: [
                                        {
                                            name: 'foo.js'
                                        }
                                    ]
                                },
                                {
                                    name: 'bar.js'
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        expect(tree(paths, 'root')).to.deep.equal(expectedTree);
    });
});

describe('collapsed tree test', () => {
    it('should collapse branches with only child', () => {
        const paths = ['dir1/dir2/foo.js', 'bar.js'];

        const expectedCollapsedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1/dir2',
                    children: [
                        {
                            name: 'foo.js'
                        }
                    ]
                },
                {
                    name: 'bar.js'
                }
            ]
        };

        expect(collapsedTree(paths, 'root')).to.deep.equal(
            expectedCollapsedTree
        );
    });

    it('should collapse branches with nested childs', () => {
        const paths = ['dir1/dir2/foo.js', 'dir1/dir2/bar.js'];

        const expectedCollapsedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1/dir2',
                    children: [
                        {
                            name: 'foo.js'
                        },
                        {
                            name: 'bar.js'
                        }
                    ]
                }
            ]
        };

        expect(collapsedTree(paths, 'root')).to.deep.equal(
            expectedCollapsedTree
        );
    });

    it('should collapse deeply nested leaf', () => {
        const paths = ['dir1/dir2/dir3/dir4/foo.js'];

        const expectedCollapsedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1/dir2/dir3/dir4',
                    children: [
                        {
                            name: 'foo.js'
                        }
                    ]
                }
            ]
        };

        expect(collapsedTree(paths, 'root'), 'root').to.deep.equal(
            expectedCollapsedTree
        );
    });

    it('should not collapse if no only child branches', () => {
        const paths = ['dir1/dir2/foo.js', 'dir1/bar.js'];

        const expectedCollapsedTree = {
            name: 'root',
            children: [
                {
                    name: 'dir1',
                    children: [
                        {
                            name: 'dir2',
                            children: [
                                {
                                    name: 'foo.js'
                                }
                            ]
                        },
                        {
                            name: 'bar.js'
                        }
                    ]
                }
            ]
        };

        expect(collapsedTree(paths, 'root')).to.deep.equal(
            expectedCollapsedTree
        );
    });
});
