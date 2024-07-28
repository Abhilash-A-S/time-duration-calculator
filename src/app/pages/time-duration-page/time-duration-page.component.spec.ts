import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDurationPageComponent } from './time-duration-page.component';

describe('TimeDurationPageComponent', () => {
  let component: TimeDurationPageComponent;
  let fixture: ComponentFixture<TimeDurationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeDurationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeDurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
