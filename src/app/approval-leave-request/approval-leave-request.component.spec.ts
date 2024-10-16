import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLeaveRequestComponent } from './approval-leave-request.component';

describe('ApprovalLeaveRequestComponent', () => {
  let component: ApprovalLeaveRequestComponent;
  let fixture: ComponentFixture<ApprovalLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalLeaveRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
