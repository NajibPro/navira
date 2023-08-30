import { Injectable } from '@angular/core';
import { Note } from '../profile-notifications/notification';
import { Paper } from '../profile-files/paper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getNotifications(): Note[]{
    let notifications: Note[] = [
      {
        type: 0,
        title: 'La vérification est terminé avec succées',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      {
        type: 1,
        title: 'Vous devez renouvelez vos fichiers',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
      },

      {
        type: 2,
        title: 'Ton dossier est invalid !!',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },

      {
        type: 0,
        title: 'La vérification est terminé avec succées',
        message: 'velit esse cillum dolore eu fugiat nulla pariatur. velit esse cillum dolore eu fugiat nulla pariatur.',
      },

      {
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
}
