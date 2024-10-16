import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReporteesComponent } from './leave-reportees.component';

describe('LeaveReporteesComponent', () => {
  let component: LeaveReporteesComponent;
  let fixture: ComponentFixture<LeaveReporteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveReporteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveReporteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
