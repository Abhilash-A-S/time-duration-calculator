import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalculatorComponentComponent } from './date-calculator-component.component';

describe('DateCalculatorComponentComponent', () => {
  let component: DateCalculatorComponentComponent;
  let fixture: ComponentFixture<DateCalculatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateCalculatorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
