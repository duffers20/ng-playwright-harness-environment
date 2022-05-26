import { ElementDimensions, EventData, ModifierKeys, TestElement, TestKey, TextOptions } from "@angular/cdk/testing";

export class PlaywrightTestElement implements TestElement {
  blur(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  clear(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  click(modifiers?: ModifierKeys): Promise<void>;
  click(location: "center", modifiers?: ModifierKeys): Promise<void>;
  click(relativeX: number, relativeY: number, modifiers?: ModifierKeys): Promise<void>;
  click(relativeX?: any, relativeY?: any, modifiers?: any): Promise<void> {
    throw new Error("Method not implemented.");
  }

  rightClick(relativeX: number, relativeY: number, modifiers?: ModifierKeys): Promise<void> {
    throw new Error("Method not implemented.");
  }

  focus(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getCssValue(property: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  hover(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  mouseAway(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  sendKeys(...keys: (string | TestKey)[]): Promise<void>;
  sendKeys(modifiers: ModifierKeys, ...keys: (string | TestKey)[]): Promise<void>;
  sendKeys(modifiers?: any, ...keys?: any[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  text(options?: TextOptions): Promise<string> {
    throw new Error("Method not implemented.");
  }

  getAttribute(name: string): Promise<string | null> {
    throw new Error("Method not implemented.");
  }

  hasClass(name: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getDimensions(): Promise<ElementDimensions> {
    throw new Error("Method not implemented.");
  }

  getProperty<T = any>(name: string): Promise<T> {
    throw new Error("Method not implemented.");
  }

  matchesSelector(selector: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  isFocused(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  setInputValue(value: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  selectOptions(...optionIndexes: number[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  dispatchEvent(name: string, data?: Record<string, EventData>): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
