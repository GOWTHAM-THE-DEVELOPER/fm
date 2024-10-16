import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMyDataComponent } from './goals-my-data.component';

describe('GoalsMyDataComponent', () => {
  let component: GoalsMyDataComponent;
  let fixture: ComponentFixture<GoalsMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsMyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalsMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
