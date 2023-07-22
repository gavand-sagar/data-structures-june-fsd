// its a collection
// FIFO
// index based access should not allowed
// access to first item
// insertion will be at last location
// you can delete the first item only

class Queue {

    #collection = []

    add(item) {
        this.#collection.push(item)
    }
    //delete
    remove() {
        this.#collection.shift()   // removes first item
    }

    front() {
        return this.#collection[0]
    }

}






let q = new Queue();

q.add("Sagar");
q.add("Rahul")
q.add("Amit")

console.log(q.front()) //?     Sagar 

q.add("Jay")
console.log(q.front()) //?     Sagar 

q.remove()
console.log(q.front()) //?      Rahul

q.remove()
q.remove()
console.log(q.front()) //?      Jay