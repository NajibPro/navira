import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDpawComponent } from './profile-dpaw.component';

describe('ProfileDpawComponent', () => {
  let component: ProfileDpawComponent;
  let fixture: ComponentFixture<ProfileDpawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDpawComponent]
    });
    fixture = TestBed.createComponent(ProfileDpawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
