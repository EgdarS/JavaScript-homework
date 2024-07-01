// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      removeFront() {
    	
//     }
//  }
// copy
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

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
        // If the list is empty, return null
        if (this.head === null) {
            return null;
        }
        
        // Store the current head
        const removedNode = this.head;
        
        // Move the head to the next node
        this.head = this.head.next;
        
        // Clear the next reference of the removed node (optional)
        removedNode.next = null;
        
        // Return the new head
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

SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log("Initial list:");
SLL1.display();

console.log("After first removeFront:");
console.log(SLL1.removeFront());
SLL1.display();

console.log("After second removeFront:");
console.log(SLL1.removeFront());
SLL1.display();

console.log("After third removeFront:");
console.log(SLL1.removeFront());
SLL1.display();

console.log("After fourth removeFront (empty list):");
console.log(SLL1.removeFront());
SLL1.display();