import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMyDataComponent } from './home-my-data.component';

describe('HomeMyDataComponent', () => {
  let component: HomeMyDataComponent;
  let fixture: ComponentFixture<HomeMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
