import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHiresCardComponent } from './new-hires-card.component';

describe('NewHiresCardComponent', () => {
  let component: NewHiresCardComponent;
  let fixture: ComponentFixture<NewHiresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHiresCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewHiresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
