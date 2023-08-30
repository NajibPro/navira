import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-dpaw-account',
  templateUrl: './profile-dpaw-account.component.html',
  styleUrls: ['./profile-dpaw-account.component.css']
})
export class ProfileDpawAccountComponent {
  oldData = {
    lname: "Mohamed Nadjib",
    fname: "Bentayeb",
    bday: "2003-09-29",
    wilaya: "05. Batna",
    phone: "213562198660",
    userName: "Najib_03",
    email: "najibbentayeb03@gmail.com",
    register_commerce: "",
    extrait_de_naissance_number: "",
    photo: "",
  }

  @Output() logoutCheckEvent = new EventEmitter<boolean>();

  ActivateLogoutCheckMode(){
    this.logoutCheckEvent.emit(true)
  }
}
