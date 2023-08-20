import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDpawComponent } from './signup-dpaw.component';

describe('SignupDpawComponent', () => {
  let component: SignupDpawComponent;
  let fixture: ComponentFixture<SignupDpawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDpawComponent]
    });
    fixture = TestBed.createComponent(SignupDpawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
