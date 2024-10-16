import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyComponent } from './competency.component';

describe('CompetencyComponent', () => {
  let component: CompetencyComponent;
  let fixture: ComponentFixture<CompetencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
