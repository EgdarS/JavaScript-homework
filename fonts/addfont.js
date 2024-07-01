// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

//  class SLL {
//      // constructor, other methods, removed for brevity
//      addFront(value) {
    	
//     }
//  }
// copy
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

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
        // Create a new node
        const newNode = new Node(value);

        // Make the new node point to the current head
        newNode.next = this.head;

        // Update the head to be the new node
        this.head = newNode;

        // Return the new head node
        return this.head;
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

console.log(SLL1.addFront(18));
SLL1.display();

console.log(SLL1.addFront(5));
SLL1.display();

console.log(SLL1.addFront(73));
SLL1.display();