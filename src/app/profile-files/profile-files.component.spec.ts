import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFilesComponent } from './profile-files.component';

describe('ProfileFilesComponent', () => {
  let component: ProfileFilesComponent;
  let fixture: ComponentFixture<ProfileFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileFilesComponent]
    });
    fixture = TestBed.createComponent(ProfileFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
