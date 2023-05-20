import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHComponent } from './custom-h.component';

describe('CustomHComponent', () => {
  let component: CustomHComponent;
  let fixture: ComponentFixture<CustomHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
