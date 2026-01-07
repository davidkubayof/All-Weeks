import {Counter} from './Counter.js';
import assert from 'assert';

const counter = new Counter();

/* initial state */
assert.strictEqual(counter.value, 0);

/* increment */
counter.increment();
assert.strictEqual(counter.value, 1);

/* decrement */
counter.decrement();
assert.strictEqual(counter.value, 0);

/* cannot go below zero */
assert.throws(() => {
  counter.decrement();
});

console.log('✅ Counter tests passed');
