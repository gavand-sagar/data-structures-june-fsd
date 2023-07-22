// its a collection
// LIFO
// index based access should not allowed
// you can access only the last time
// you can delete the last item only

class Stack {

    #collection = []

    add(item) {
        this.#collection.push(item) /// insert at last
    }

    top() {
        return this.#collection[this.#collection.length - 1]
    }

    pop() {
        this.#collection.pop();
    }
}



let s = new Stack();
s.add(45);
console.log(s.top()) // 45

s.add(67)
s.add(34)
console.log(s.top()) // 34


s.pop()
console.log(s.top())  // 67


s.collection.shift()  // it removes item from first posistion


