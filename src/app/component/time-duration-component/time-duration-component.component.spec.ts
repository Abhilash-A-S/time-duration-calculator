import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDurationComponentComponent } from './time-duration-component.component';

describe('TimeDurationComponentComponent', () => {
  let component: TimeDurationComponentComponent;
  let fixture: ComponentFixture<TimeDurationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeDurationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeDurationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
