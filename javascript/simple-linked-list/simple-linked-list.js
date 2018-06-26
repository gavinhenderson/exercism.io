class Element {
    constructor(val, next) {
        if (arguments.length === 0) throw new Error("Element must get an argument");
        if (next != undefined && !(next instanceof Element)) throw new Error("Next must be an element");
        this.value = val;
        this.next = next;
    }
}

class List {
    constructor(newElement) {
        this.head = newElement;
    }

    push(newElement) {
        if(this.head === undefined) {
            this.head = newElement;
            return;
        }
        this.getLastElement().next = newElement;
    }

    unshift(newElement){
        newElement.next = this.head;
        this.head = newElement;
    }

    shift() {
        this.head = this.head.next;
    }

    pop(){
        if(this.head.next === undefined) {
            this.head = undefined;
            return;
        }
        let newTail = this.getSecondLastElement();
        newTail.next = undefined;
    }

    getSecondLastElement() {
        let iterating = true;
        let current = this.head;
        while(iterating) {
            if(current.next.next !== undefined){
                current = current.next;
            } else {
                iterating = false;
            }
        }
        return current;
    }

    getLastElement() {
        let iterating = true;
        let current = this.head;
        while(iterating) {
            if(current.next !== undefined){
                current = current.next;
            } else {
                iterating = false;
            }
        }
        return current;
    }

    toArray() {
        let newArr = [];
        let iterating = true;
        let current = this.head;
        while(iterating) {
            if(current === undefined){
                iterating = false;
            } else {
                newArr.push(current.value);
                current = current.next;
            }
        }
        return newArr;
    }

    reverse() {
        let arr = this.toArray();
        arr = arr.reverse();
        let newList = List.fromArray(arr);
        this.head = newList.head
    }
}

List.fromArray = function(arr) {
    let newList = new List();
    arr.forEach(val => {
        let newElement = new Element(val);
        newList.push(newElement)
    });
    return newList;
}

module.exports = { List, Element }