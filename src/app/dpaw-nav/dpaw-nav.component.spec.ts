import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpawNavComponent } from './dpaw-nav.component';

describe('DpawNavComponent', () => {
  let component: DpawNavComponent;
  let fixture: ComponentFixture<DpawNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DpawNavComponent]
    });
    fixture = TestBed.createComponent(DpawNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
