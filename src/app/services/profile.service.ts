import { Injectable } from '@angular/core';
import { Note } from '../profile-notifications/notification';
import { Paper } from '../profile-files/paper';
import { User } from '../document/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getNotifications(): Note[]{
    let notifications: Note[] = [
      {
        id: 78785,
        type: 0,
        title: 'La vérification est terminé avec succées',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      {
        id: 49968,
        type: 1,
        title: 'Vous devez renouvelez vos fichiers',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
      },

      {
        id: 654,
        type: 2,
        title: 'Ton dossier est invalid !!',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },

      {
        id: 8,
        type: 0,
        title: 'La vérification est terminé avec succées',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      {
        id: 5,
        type: 3,
        title: 'Une nouvelle option est valable',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      }
    ]
    return notifications;
  }

  getFiles(): Paper[]{
    let profilePapers: Paper[] = [
      {
        procedureNum: 1,
        expirationTime: new Date(2023, 0, 17),
        fileUrl: '../../assets/imgs/account-not-selected.svg'
      },

      {
        procedureNum: 3,
        expirationTime: new Date(2024, 0, 17),
        fileUrl: '../../assets/imgs/help-selected.svg'
      },

      {
        procedureNum: 10,
        expirationTime: new Date(2023, 10, 17),
        fileUrl: '../../assets/imgs/help-selected.svg'
      },

      {
        procedureNum: 2,
        expirationTime: null,
        fileUrl: '../../assets/imgs/help-selected.svg'
      },

      {
        procedureNum: 1,
        expirationTime: new Date(2023, 0, 17),
        fileUrl: '../../assets/imgs/close-note.svg'
      }
    ]

    return profilePapers;
  }

  getUserInfo(): User{
    let user: User = {
      first_name: 'Bentayeb',
      last_name: 'Mohamed Nadjib',
      username: 'Najib_03',
      email: 'najibbentayeb03@gmail.com',
      company_name: 'pysoft',
      wilaya: '05',
      phone: '213XXXXXXXXX',
      CNN: 'XXXXXXXXX',
      birthdate: 'XX/XX/XXXX',
      extrait_de_naissance: 'XXXXXXXXX',
      registre_commerce: 'XXXXXXXXX',
      physique: false
    }

    return user;
  }
}
