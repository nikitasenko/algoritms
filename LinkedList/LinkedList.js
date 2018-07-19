const Element = require('./Element');
class LinkedList {


    constructor() {
        this.listSize = 0;
        this.head = null;
    }

    size() {
        return this.listSize;
    }

    add(elem) {
        if (!elem) return false;
        let element = new Element(elem);
        if (this.head) {
            element.next = this.head;
        }
        this.head = element;
        this.listSize++;
    }

    insert(position, value) {
        if (!value) return false;
        if(position <= 0) return false;
        if(position>this.listSize) position = this.listSize;
        if(position === 1 || position === 0) {
            this.add(value);
            return true;
        }
        let elem = new Element(value);
        let curr = this.head;
        let i = position - 2;
        while(i>0) {
            curr = curr.next;
            i--;
        }
        let next = curr.next;
        curr.next = elem;
        elem.next = next;
        this.listSize++;
        return true;
    }

    remove(position) {
        if (position > this.listSize) return false;
        if (position === 1) {
            this.head = this.head.next;
            this.listSize--;
        } else {
            let curr = this.head;
            if (position === 2) {
                let next = curr.next;
                curr.next = next.next;
                this.listSize--;
            } else {
                let i = position - 2;
                while (i>0) {
                    i--;
                    curr = curr.next;
                }
                let next = curr.next;
                curr.next = next.next;
                this.listSize--;
            }
        }
    }

    get(position) {
        if (position > this.listSize) return false;
        if (position === 1) {
            return this.head;
        } else {
            if (position === 2) {
                return this.head.next;
            } else {
                let curr = this.head;
                let i = position - 1;
                while (i > 0) {
                    curr = curr.next;
                    i--;
                }
                return curr;
            }
        }
    }
}

module.exports = LinkedList;
