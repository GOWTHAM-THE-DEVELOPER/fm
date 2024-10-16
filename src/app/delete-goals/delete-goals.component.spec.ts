import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGoalsComponent } from './delete-goals.component';

describe('DeleteGoalsComponent', () => {
  let component: DeleteGoalsComponent;
  let fixture: ComponentFixture<DeleteGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
