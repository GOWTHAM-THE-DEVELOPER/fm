import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReportDashboardComponent } from './leave-report-dashboard.component';

describe('LeaveReportDashboardComponent', () => {
  let component: LeaveReportDashboardComponent;
  let fixture: ComponentFixture<LeaveReportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveReportDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
