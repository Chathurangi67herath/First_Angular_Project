import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileprojectComponent } from './mobileproject.component';

describe('MobileprojectComponent', () => {
  let component: MobileprojectComponent;
  let fixture: ComponentFixture<MobileprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
