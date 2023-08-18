import { Component, OnInit } from '@angular/core';
import { InputfunctionsService } from '../services/inputfunctions.service';

@Component({
  selector: 'app-procedure1',
  templateUrl: './procedure1.component.html',
  styleUrls: ['./procedure1.component.css']
})
export class Procedure1Component implements OnInit {

  constructor(public inputFunctions : InputfunctionsService){

  }

  backendErrors: any;
  backendErrorKeys: string[] = [];

  formData: { [key: string]: string } = {
    acte_de_naissance: '',
    photo_identite: '',
    attestation_assurance: '',
    recepisse_redevance_annuelle: '',
    status_societe: '',
    numero_registre_de_commerce: '',
    nom_du_navire: '',
    immatriculation_du_navire: '',
    annee_de_construction_du_navire: '',
    date_de_mise_en_exploitation_du_navire: '',
    longueur_totale_du_navire: '',
    coque_du_navire: '',
    jauge_brute_du_navire: '',
    puissance_du_moteur: '',
    marque_du_moteur: '',
    numero_de_serie_du_moteur: '',
    pv_de_visite_de_securie_du_navire: '',
  };

  engins_a_utiliser = {
    canne_a_peche: false,
    moulinet: false,
    filet_de_peche: false,
    nylon_de_peche: false,
    appat: false
  };

  equipements_de_communication = {
    vhf: false,
    gps: false,
    others: false,
  }

  showErrors : boolean = false;

  ngOnInit(): void {

  }

  onSubmit(){

  }

  handleFileInputChange(event: Event, inputName: string) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0]; // Get the selected file
  
    if (file) {
      this.convertFileToBase64(file, inputName);
    }
  }

  convertFileToBase64(file: File, inputName: string) {
    const reader = new FileReader();
  
    // Read the file and convert it to base64
    reader.readAsDataURL(file);
  
    // onload function is triggered when the reading operation is successfully completed
    reader.onload = () => {
      // 'result' contains the base64 encoded string of the file
      // assigning this base64 string to the formData object's property
      this.formData[inputName] = reader.result as string;
    };
  }

}
