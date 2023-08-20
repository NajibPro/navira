import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresDpawComponent } from './procedures-dpaw.component';

describe('ProceduresDpawComponent', () => {
  let component: ProceduresDpawComponent;
  let fixture: ComponentFixture<ProceduresDpawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceduresDpawComponent]
    });
    fixture = TestBed.createComponent(ProceduresDpawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
