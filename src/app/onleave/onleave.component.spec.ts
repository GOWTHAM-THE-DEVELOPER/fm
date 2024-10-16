import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnleaveComponent } from './onleave.component';

describe('OnleaveComponent', () => {
  let component: OnleaveComponent;
  let fixture: ComponentFixture<OnleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnleaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
