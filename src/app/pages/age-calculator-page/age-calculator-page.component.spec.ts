import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalculatorPageComponent } from './age-calculator-page.component';

describe('AgeCalculatorPageComponent', () => {
  let component: AgeCalculatorPageComponent;
  let fixture: ComponentFixture<AgeCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeCalculatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
