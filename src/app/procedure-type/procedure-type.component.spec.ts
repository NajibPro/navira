import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeComponent } from './procedure-type.component';

describe('ProcedureTypeComponent', () => {
  let component: ProcedureTypeComponent;
  let fixture: ComponentFixture<ProcedureTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcedureTypeComponent]
    });
    fixture = TestBed.createComponent(ProcedureTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
