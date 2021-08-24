import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationlayoutComponent } from './registrationlayout.component';

describe('RegistrationlayoutComponent', () => {
  let component: RegistrationlayoutComponent;
  let fixture: ComponentFixture<RegistrationlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
