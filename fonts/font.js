// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      front() {
    	
//     }
//  }
// copy
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

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
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head === null) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return this.head;
    }

    front() {
        // If the list is empty, return null
        if (this.head === null) {
            return null;
        }
        
        // Return the value of the head node
        return this.head.data;
    }

    // Helper method to display the list (for testing purposes)
    display() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.data} -> `;
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

// Test cases
const SLL1 = new SLL();

SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log("Initial list:");
SLL1.display();

console.log("Front value:", SLL1.front());

console.log("After removeFront:");
SLL1.removeFront();
SLL1.display();
console.log("New front value:", SLL1.front());

console.log("Remove all nodes:");
SLL1.removeFront();
SLL1.removeFront();
SLL1.display();
console.log("Front of empty list:", SLL1.front());