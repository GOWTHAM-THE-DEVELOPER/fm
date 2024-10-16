import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTrackingComponent } from './leave-tracking.component';

describe('LeaveTrackingComponent', () => {
  let component: LeaveTrackingComponent;
  let fixture: ComponentFixture<LeaveTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
