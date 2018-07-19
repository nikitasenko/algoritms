const chai = require('chai');
const assert = chai.assert;
const LinkedList = require('./LinkedList');

describe('LinkelList tests', function () {
    let list;
    before(() => {
        list = new LinkedList();
    });

    it('add elem', () => {
        list.add(1);
        list.add(5);
        list.add(3);
        assert.equal(3, list.size());
    });


    it('remove elem', () => {
        assert(1, list.get(list.size()));
        list.remove(list.size());
        assert(5, list.get(list.size()));
        assert(2, list.size());
    });

    it('insert elem and get', () => {
        list.add(7);
        assert(7, list.get(1)); //size 3
        list.insert(1, 9); //size 4
        assert(9, list.get(1));
        assert(4, list.size());
        assert(7, list.get(2));
        list.insert(4, 99); //size 5
        assert(99, list.get(4));
        assert(5, list.size());
        assert(5, list.get(5));
    });



});
