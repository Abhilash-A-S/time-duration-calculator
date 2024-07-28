import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCalculatorPageComponent } from './time-calculator-page.component';

describe('TimeCalculatorPageComponent', () => {
  let component: TimeCalculatorPageComponent;
  let fixture: ComponentFixture<TimeCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeCalculatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
