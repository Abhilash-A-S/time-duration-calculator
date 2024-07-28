import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCalculatorExpressionComponent } from './time-calculator-expression.component';

describe('TimeCalculatorExpressionComponent', () => {
  let component: TimeCalculatorExpressionComponent;
  let fixture: ComponentFixture<TimeCalculatorExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeCalculatorExpressionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeCalculatorExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
