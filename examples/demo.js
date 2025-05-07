import { LRUCache } from '../src/LRUCache.js';

const cache = new LRUCache(3);

cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);

console.log(cache.get('a')); // Should print 1 and move 'a' to most recent
cache.put('d', 4);           // Evicts 'b'

console.log(cache.get('b')); // Should print undefined or null