import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceFeedbackComponent } from './performance-feedback.component';

describe('PerformanceFeedbackComponent', () => {
  let component: PerformanceFeedbackComponent;
  let fixture: ComponentFixture<PerformanceFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
