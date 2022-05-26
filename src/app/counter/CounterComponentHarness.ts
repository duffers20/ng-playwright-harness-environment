import { ComponentHarness } from "@angular/cdk/testing";

export class CounterComponentHarness extends ComponentHarness {
  static hostSelector = 'app-counter';

  getIncrementButtonElement = this.locatorFor('#increment');
  getDecrementButtonElement = this.locatorFor('#decrement');
  getResetButtonElement = this.locatorFor('#reset');
  getCounterValueElement = this.locatorFor('#counterValue');

  async increment() {
    const increment = await this.getIncrementButtonElement();
    return increment.click();
  }

  async decrement() {
    const decrement = await this.getDecrementButtonElement();
    return decrement.click();
  }

  async reset() {
    const reset = await this.getResetButtonElement();
    return reset.click();
  }

  async counterValue() {
    const counter = await this.getCounterValueElement();
    return counter.text();
  }
}
