import { Node } from './Node.js';

export class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    get(key) {
        // TODO: Implement get logic
        if (!this.map.has(key)) return null;

        const node = this.map.get(key);
        this._moveToHead(node);
        return node.value;
    }

    put(key, value) {
        // TODO: Implement put logic
        if (this.map.has(key)) {
            // Update value and move to head
            const node = this.map.get(key);
            node.value = value;
            this._moveToHead(node);
        } else {
            // Create new node
            const newNode = new Node(key, value);
            this.map.set(key, newNode);
            this._addNodeToHead(newNode);

            // If over capacity, remove LRU
            if (this.map.size > this.capacity) {
                this._removeLRU();
            }
        }
    }
    // Helper: Move a node to the head (most recently used)
    _moveToHead(node) {
        this._removeNode(node);
        this._addNodeToHead(node);
    }

    // Helper: Add node to head of linked list
    _addNodeToHead(node) {
        node.next = this.head;
        node.prev = null;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;

        // If tail doesn't exist yet, set it
        if (!this.tail) {
            this.tail = node;
        }
    }

    // Helper: Remove a node from its position in the linked list
    _removeNode(node) {
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            // If no prev, this was head
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            // If no next, this was tail
            this.tail = node.prev;
        }
    }

    // Helper: Remove the least recently used (tail) node
    _removeLRU() {
        if (!this.tail) return;

        const lruKey = this.tail.key;
        this._removeNode(this.tail);
        this.map.delete(lruKey);
    }
}