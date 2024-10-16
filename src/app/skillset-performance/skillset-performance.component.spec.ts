import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetPerformanceComponent } from './skillset-performance.component';

describe('SkillsetPerformanceComponent', () => {
  let component: SkillsetPerformanceComponent;
  let fixture: ComponentFixture<SkillsetPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsetPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsetPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
