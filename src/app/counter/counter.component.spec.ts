import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('clicking increment increases counter', () => {
    // Arrange
    setCounterValue(0);

    // Act
    clickButton('#increment');

    // Assert
    expect(getCounterValue()).toBe('1');
  });

  it('clicking decrement decreases counter', () => {
    // Arrange
    setCounterValue(3);

    // Act
    clickButton('#decrement');

    // Assert
    expect(getCounterValue()).toBe('2');
  });

  it('clicking reset resets counter', () => {
    // Arrange
    setCounterValue(3);

    // Act
    clickButton('#reset');

    // Assert
    expect(getCounterValue()).toBe('0');
  });

  function getCounterValue(): string {
    const element = fixture.nativeElement.querySelector('#counterValue') as HTMLSpanElement;
    return element.innerText;
  }

  function clickButton(selector: string): void {
    const button = fixture.nativeElement.querySelector(selector) as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
  }

  function setCounterValue(value: number) {
    component.counter = value;
    fixture.detectChanges();
  }
});
