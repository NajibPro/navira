import { Component } from '@angular/core';
import { ProceduresComponent } from '../procedures/procedures.component';

@Component({
  selector: 'app-procedure-type',
  templateUrl: './procedure-type.component.html',
  styleUrls: ['./procedure-type.component.css']
})
export class ProcedureTypeComponent {
  proceduresType : number = 0;
  showProcedures(proType : number) : void {
    if(this.proceduresType === proType){
      this.proceduresType = 0;
      return;
    }
    this.proceduresType = proType
  }
}
