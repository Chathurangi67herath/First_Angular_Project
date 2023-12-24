import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebprojectComponent } from './webproject.component';

describe('WebprojectComponent', () => {
  let component: WebprojectComponent;
  let fixture: ComponentFixture<WebprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
