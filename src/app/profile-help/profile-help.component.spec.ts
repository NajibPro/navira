import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHelpComponent } from './profile-help.component';

describe('ProfileHelpComponent', () => {
  let component: ProfileHelpComponent;
  let fixture: ComponentFixture<ProfileHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileHelpComponent]
    });
    fixture = TestBed.createComponent(ProfileHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
