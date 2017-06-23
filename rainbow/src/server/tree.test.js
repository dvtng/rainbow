import { describe, it } from 'mocha';
import { expect } from 'chai';
import tree from './tree.js';

describe('tree test', () => {
    it('should turn single path into tree', () => {
        const paths = ['/dir1/dir2/foo.js'];

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
        expect(tree(paths)).to.deep.equal(expectedTree);
    });

    it('should turn multiple paths into tree', () => {
        const paths = ['/dir1/dir2/foo.js', '/dir1/bar.js', 'cat.js'];

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
        expect(tree(paths)).to.deep.equal(expectedTree);
    });

    it('should turn paths with depth of 3 into tree', () => {
        const paths = ['/dir1/dir2/dir3/foo.js', '/dir1/dir2/bar.js'];

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

        expect(tree(paths)).to.deep.equal(expectedTree);
    });
});
