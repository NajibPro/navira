import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { progress } from '../progress/progress';
import { Demand } from '../procedures-dpaw/request';
import { Dossier } from '../document/dossier';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) { }

  sendProcedure1(): void{
    
  }

  getProgresses(): progress[] {
    let progressList: progress[] = [
      {
        procedure_number: 5,
        is_sent: true,
        is_waiting: true,
        is_accepted: false,
        is_refused: false
      },
  
      {
        procedure_number: 3,
        is_sent: true,
        is_waiting: false,
        is_accepted: false,
        is_refused: false
      },
  
      {
        procedure_number: 1,
        is_sent: true,
        is_waiting: true,
        is_accepted: true,
        is_refused: false
      },
  
      {
        procedure_number: 20,
        is_sent: true,
        is_waiting: true,
        is_accepted: false,
        is_refused: true
      }
    ]

    return progressList;
  }

  getRequests(): Demand[]{
    let requestList: Demand[] = [
      {
        id: 1,
        duration: new Date(2023, 7, 1),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '53412312',
        for_you: false,
      },

      {
        id: 2,
        duration: new Date(2023, 7, 15),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '123123123',
        for_you: true,
      },

      {
        id: 3,
        duration: new Date(2023, 7, 20),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '642323231',
        for_you: false,
      },

      {
        id: 4,
        duration: new Date(2023, 7, 18),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '645334577',
        for_you: true,
      },

      {
        id: 5,
        duration: new Date(2023, 7, 15),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '796138522',
        for_you: false,
      },

      {
        id: 6,
        duration: new Date(2023, 7, 5),
        procedureNumber: 1,
        personPhysique: true,
        cnn: '352354245',
        for_you: true,
      },
    ]

    return requestList;
  }

  getDocument(): Dossier{
    let document: Dossier = {
      procedureNum: 1,
      info: [
        {
          name: 'XXXX',
          type: "text",
          data: 'XXXXXXXXXXXXXXX'
        },

        {
          name: 'NCI',
          type: "text",
          data: '536433455353'
        },

        {
          name: 'email',
          type: "text",
          data: 'najibbentayeb03@gmail.com'
        },

        {
          name: 'Date de naissance',
          type: "text",
          data: 'XX/XX/XXXX'
        },

        {
          name: 'XXXX',
          type: "file",
          data: '../../assets/imgs/danger-note.svg'
        },

        {
          name: 'beautiful file',
          type: "file",
          data: '../../assets/imgs/danger-note.svg'
        },

        {
          name: 'XXXX',
          type: "list",
          data: ['i', 'love', 'you', 'so', "much", ';)']
        },
      ]
    }
    return document
  }
}
