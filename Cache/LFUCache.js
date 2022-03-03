
import { DoubleLinkedList } from '../Data-Structures/Linked-List/DoublyLinkedList'

class CacheItem {
  constructor (key, val) {
    this.key = key
    this.val = val
  }
}

class LFUCache {
  // LFU Cache to store a given capacity of data
  // The Double Linked List is used to store the order of deletion from the cache
  // The rear.prev holds the most frequently used key and the head.next holds the least used key
  // When the number of elements reaches the capacity, the least frequently used item is removed before adding the next key
  constructor (capacity) {
    this.list = new DoubleLinkedList()
    this.capacity = capacity
    this.numKeys = 0
    this.hits = 0
    this.miss = 0
    this.cache = {}
  }

  cacheInfo () {
    // Return the details for the cache instance [hits, misses, capacity, current_size]
    return `CacheInfo(hits=${this.hits}, misses=${this.miss}, capacity=${this.capacity}, current size=${this.numKeys})`
  }

  set (key, value) {
    // Sets the value for the input key and updates the Double Linked List
    if (!(key in this.cache)) {
      if (this.numKeys >= this.capacity) {
        const keyToDelete = this.list.getHead().element.key
        this.list.delete(this.cache[keyToDelete])
        delete this.cache[keyToDelete]
        this.numKeys -= 1
      }
      this.cache[key] = new CacheItem(key, value)
      this.list.append(this.cache[key])
      this.numKeys += 1
    } else {
      const node = this.list.delete(this.cache[key])
      node.val = value
      this.list.append(node)
    }
  }

  get (key) {
    // Returns the value for the input key and updates the Double Linked List. Returns null if key is not present in cache
    if (key in this.cache) {
      this.hits += 1
      this.list.append(this.list.delete(this.cache[key]))
      return this.cache[key].val
    }
    this.miss += 1
    return null
  }
}

export { LFUCache }
