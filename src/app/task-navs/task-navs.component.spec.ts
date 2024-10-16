import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNavsComponent } from './task-navs.component';

describe('TaskNavsComponent', () => {
  let component: TaskNavsComponent;
  let fixture: ComponentFixture<TaskNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskNavsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
