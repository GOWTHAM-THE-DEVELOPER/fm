import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSpaceComponent } from './teams-space.component';

describe('TeamsSpaceComponent', () => {
  let component: TeamsSpaceComponent;
  let fixture: ComponentFixture<TeamsSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
