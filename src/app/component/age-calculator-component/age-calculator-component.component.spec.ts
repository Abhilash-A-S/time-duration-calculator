import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalculatorComponentComponent } from './age-calculator-component.component';

describe('AgeCalculatorComponentComponent', () => {
  let component: AgeCalculatorComponentComponent;
  let fixture: ComponentFixture<AgeCalculatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeCalculatorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
