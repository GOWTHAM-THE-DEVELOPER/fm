import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDashboardComponent } from './teams-dashboard.component';

describe('TeamsDashboardComponent', () => {
  let component: TeamsDashboardComponent;
  let fixture: ComponentFixture<TeamsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
