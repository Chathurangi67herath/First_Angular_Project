import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxprojectComponent } from './uiuxproject.component';

describe('UiuxprojectComponent', () => {
  let component: UiuxprojectComponent;
  let fixture: ComponentFixture<UiuxprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiuxprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiuxprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
