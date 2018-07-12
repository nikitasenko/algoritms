const chai = require('chai');
const assert = chai.assert;
const BinaryTree = require('./BinaryTree');

describe('BinaryTree tests', function () {
    let tree;
    beforeEach(() => {
        tree = new BinaryTree();
    });

    it('should add elem', () => {
        tree.add(5);
        tree.add(4);
        tree.add(8);
        assert.equal('not found', tree.search(9));
        assert.equal(4, tree.search(4));
        assert.equal(5, tree.search(5));
        assert.equal(8, tree.search(8));
    });

    it('should delete elem', () => {
        tree.add(5);
        tree.add(4);
        tree.add(8);
        tree.delete(8);
        assert.equal('not found', tree.search(8));
        assert.equal(4, tree.search(4));
        assert.equal(5, tree.search(5));
    });

    it('should return null because tree empty', () => {
        assert.equal('not found', tree.search(8));
    });

    it('should delete elems', () => {
        tree.add(5);
        tree.add(4);
        tree.add(8);
        tree.delete(8);
        tree.add(7);
        tree.add(1);
        tree.delete(5);
        assert.equal('not found', tree.search(5));
        assert.equal('not found', tree.search(8));
    });

    it('should get elems', () => {
        tree.add(5);
        tree.add(4);
        tree.add(8);
        tree.delete(8);
        tree.add(7);
        tree.add(1);
        tree.delete(5);
        assert.equal(1, tree.search(1));
        assert.equal(4, tree.search(4));
    });
});
