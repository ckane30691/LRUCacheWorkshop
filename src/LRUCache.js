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
    }

    put(key, value) {
        // TODO: Implement put logic
    }

    // Helper methods you might implement:
    // - moveToHead(node)
    // - removeNode(node)
    // - addNodeToHead(node)
    // - removeTail()
}