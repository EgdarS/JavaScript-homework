// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

//  class SLL {
//     // constructor, other methods, removed for brevity
//     display() {
//     	// neatly display nodes in my list
//     }
//  }
// copy
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    display() {
        if (this.head === null) {
            return "The list is empty.";
        }
        let runner = this.head;
        let values = [];
        while (runner !== null) {
            values.push(runner.data);
            runner = runner.next;
        }
        return values.join(", ");
    }
}

// Example usage:
const SLL1 = new SLL();
console.log(SLL1.addFront(76)); // Node { data: 76, next: null }
console.log(SLL1.addFront(2));  // Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display());    // "2, 76"
console.log(SLL1.addFront(11.41)); // Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display());    // "11.41, 2, 76"
