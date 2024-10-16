import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMyDataComponent } from './performance-my-data.component';

describe('PerformanceMyDataComponent', () => {
  let component: PerformanceMyDataComponent;
  let fixture: ComponentFixture<PerformanceMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
