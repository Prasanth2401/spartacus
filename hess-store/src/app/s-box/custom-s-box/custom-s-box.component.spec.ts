import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSBoxComponent } from './custom-s-box.component';

describe('CustomSBoxComponent', () => {
  let component: CustomSBoxComponent;
  let fixture: ComponentFixture<CustomSBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
