export class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value === 0) {
      throw new Error('Cannot go below zero');
    }
    this.value--;
  }
}

