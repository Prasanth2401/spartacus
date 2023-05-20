import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderIdComponent } from './custom-header-id.component';

describe('CustomHeaderIdComponent', () => {
  let component: CustomHeaderIdComponent;
  let fixture: ComponentFixture<CustomHeaderIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeaderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
