import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDurationComponentTimeComponent } from './time-duration-component-time.component';

describe('TimeDurationComponentTimeComponent', () => {
  let component: TimeDurationComponentTimeComponent;
  let fixture: ComponentFixture<TimeDurationComponentTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeDurationComponentTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeDurationComponentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
