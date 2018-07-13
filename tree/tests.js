const chai = require('chai');
const assert = chai.assert;
const BinaryTree = require('./BinaryTree');

describe('BinaryTree tests', function () {
    let tree;

    beforeEach(() => {
        tree = new BinaryTree();
    });

    afterEach(() => {
        tree = null;
    });

    describe('Add function', function () {
        it('should add element by key', () => {
            tree.add(5, 'first node');
            assert.equal('first node', tree.search(5));
        });

        it('should add several element by keys', () => {
            tree.add(5, 'first node');
            tree.add(8, 'second node');
            assert.equal('first node', tree.search(5));
            assert.equal('second node', tree.search(8));
        });

        it('should throw exception on add without key', () => {
            assert.throws(()=>{tree.add(null,'first node')}, Error, 'Not key');
        });

        it('should throw exception on add without value', () => {
            assert.throws(()=>{tree.add(5)}, Error, 'Not value');
        });
    });

    describe('Delete function', function () {
        it('should delete element', () => {
            tree.add(8, 'first node');
            tree.delete(8);
            assert.equal(null, tree.search(8));
        });

        it('should correct delete elements', () => {
            tree.add(5);
            tree.add(8);
            tree.delete(8);
            tree.add(1);
            tree.delete(5);
            assert.equal(null, tree.search(5));
            assert.equal(null, tree.search(8));
        });

        it('should return value of deleted element by key', () => {
            tree.add(5, 'first node');
            assert.equal('first node', tree.delete(5));
        });

        it('should throw exception on delete without key', () => {
            assert.throws(() => {tree.delete()}, Error, 'Not key');
        });
    });

    describe('Search function', function () {
        it('should return value of element by key', () => {
            tree.add(5, 'first element');
            assert.equal('first element', tree.search(5));
        });

        it('should return null on tree empty', () => {
            assert.isNull(tree.search(8));
        });

        it('should throw exception on search without key', () => {
            assert.throws(() => {tree.search()}, Error, 'Not key');
        });
    });

});
