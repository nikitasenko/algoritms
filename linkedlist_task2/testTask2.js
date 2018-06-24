const chai = require('chai');
const assert = chai.assert;
const LinkedList = require('./LinkedList');

describe('LinkelList tests', function () {
    let list;
   before(() => {
        list = new LinkedList();
   });

    it('add elem', () => {
       list.add(5);
       assert.equal(1, list.size());
    });

    it('add elem', () => {
        list.add(99);
        assert.equal(2, list.size());
    });

    it('get elem', () => {
        let number = list.get(2);
        assert.equal(5, number.value);
    });

    it('get elem', () => {
        let number = list.get(1);
        assert.equal(99, number.value);
    });

    it('remove elem', () => {
        list.remove(1);
        assert.equal(1, list.size());
    });

    it('get elem', () => {
        let number = list.get(1);
        assert.equal(5, number.value);
    });

    it('insert elem', () => {
        assert.equal(99, 3232);
    });
});
