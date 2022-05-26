import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from "./counter/counter.component";
import { HarnessLoader } from "@angular/cdk/testing";
import { CounterComponentHarness } from "./counter/CounterComponentHarness";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let loader: HarnessLoader;
  let counter: CounterComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('with test harness', () => {
    beforeEach(() => {
      loader = TestbedHarnessEnvironment.loader(fixture);
    });

    beforeEach(async () => {
      counter = await loader.getHarness(CounterComponentHarness);
    });

    it('clicking increment increases counter', async () => {
      // Arrange
      await counter.reset();

      // Act
      await counter.increment();

      // Assert
      expect(await counter.counterValue()).toBe('1');
    });

    it('clicking decrement increases counter', async () => {
      // Arrange
      await counter.increment();
      await counter.increment();
      await counter.increment();

      // Act
      await counter.decrement();

      // Assert
      expect(await counter.counterValue()).toBe('2');
    });

    it('clicking reset resets counter', async () => {
      // Arrange
      await counter.increment();
      await counter.increment();
      await counter.increment();

      // Act
      await counter.reset();

      // Assert
      expect(await counter.counterValue()).toBe('0');
    });
  })
});
