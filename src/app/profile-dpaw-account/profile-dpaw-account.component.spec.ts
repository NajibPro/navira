import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDpawAccountComponent } from './profile-dpaw-account.component';

describe('ProfileDpawAccountComponent', () => {
  let component: ProfileDpawAccountComponent;
  let fixture: ComponentFixture<ProfileDpawAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDpawAccountComponent]
    });
    fixture = TestBed.createComponent(ProfileDpawAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
