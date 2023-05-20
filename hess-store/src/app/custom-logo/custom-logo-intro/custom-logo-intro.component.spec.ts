import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLogoIntroComponent } from './custom-logo-intro.component';

describe('CustomLogoIntroComponent', () => {
  let component: CustomLogoIntroComponent;
  let fixture: ComponentFixture<CustomLogoIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLogoIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLogoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
