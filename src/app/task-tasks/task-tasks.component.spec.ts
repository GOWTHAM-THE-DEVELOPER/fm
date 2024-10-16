import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTasksComponent } from './task-tasks.component';

describe('TaskTasksComponent', () => {
  let component: TaskTasksComponent;
  let fixture: ComponentFixture<TaskTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
