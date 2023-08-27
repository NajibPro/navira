import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private profileContentTeller = new BehaviorSubject([true, false, false, false]);
  currentProfileContent = this.profileContentTeller.asObservable();

  switchProfileContent(profileContent: boolean[]){
    this.profileContentTeller.next(profileContent);
  }
}
