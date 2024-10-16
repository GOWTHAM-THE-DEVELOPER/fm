import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDirectoryComponent } from './department-directory.component';

describe('DepartmentDirectoryComponent', () => {
  let component: DepartmentDirectoryComponent;
  let fixture: ComponentFixture<DepartmentDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
