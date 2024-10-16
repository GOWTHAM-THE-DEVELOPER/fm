import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReporteesComponent } from './team-reportees.component';

describe('TeamReporteesComponent', () => {
  let component: TeamReporteesComponent;
  let fixture: ComponentFixture<TeamReporteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamReporteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamReporteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
