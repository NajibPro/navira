import { Component, OnInit } from '@angular/core';
import { InputfunctionsService } from '../services/inputfunctions.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-procedure1',
  templateUrl: './procedure1.component.html',
  styleUrls: ['./procedure1.component.css']
})
export class Procedure1Component implements OnInit {

  constructor(public inputFunctions : InputfunctionsService,private fb: FormBuilder, private http: HttpClient, private router: Router){

  }

  procedures = '/procedures';

  procedure1Form = this.fb.group({
    acte_de_naissance: ['', [Validators.required]],
    numero_registre_de_commerce: ['', [Validators.required]],
    nom_du_navire: ['', [Validators.required]],
    immatriculation_du_navire: ['', [Validators.required]],
    annee_de_construction_du_navire: ['', [Validators.required]],
    date_de_mise_en_exploitation_du_navire: ['', [Validators.required]],
    longueur_totale_du_navire: ['', [Validators.required]],
    coque_du_navire: ['', [Validators.required]],
    jauge_brute_du_navire: ['', [Validators.required]],
    puissance_du_moteur: ['', [Validators.required]],
    marque_du_moteur: ['', [Validators.required]],
    numero_de_serie_du_moteur: ['', [Validators.required]],

    //files
    photo_identite: [null, [Validators.required]],
    attestation_assurance: [null, [Validators.required]],
    recepisse_redevance_annuelle: [null, [Validators.required]],
    status_societe: [null, [Validators.required]],
    pv_de_visite_de_securie_du_navire: [null, [Validators.required]],

    //checkbox
    canne_a_peche: false,
    moulinet: false,
    filet_de_peche: false,
    nylon_de_peche: false,
    appat: false,

    vhf: false,
    gps: false,
    others: false,
  })

  backendErrors: any;
  backendErrorKeys: string[] = [];

  showErrors : boolean = false;

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
  }

  getFile(event: Event, controlName: string) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      console.log(file)
      this.procedure1Form.get(controlName)?.setValue(file);
    }
  }

  onSubmit(){
    if(this.procedure1Form.invalid){
      this.showErrors = true;
      return;
    }

    const formData = new FormData();

    // Append form values to FormData
    const entries = Object.entries(this.procedure1Form.value)
    console.log(entries)
    for (const entry in entries) {
      // entry[0] is the name of the attribute in the object "this.procedure1Form.value"
      // entry[1] is the value of the attribute in the object "this.procedure1Form.value"
      console.log(entry)
      formData.append(entry[0], entry[1]);
    }

    // Send FormData to the backend
    const token = localStorage.getItem('token')
    if(token){
      this.http.post('http://127.0.0.1:8000/procedure1/', formData, 
      { headers: {
        'Authorization': token,
      }}
      ).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Reset the form if needed
          this.procedure1Form.reset();
          this.router.navigate([this.procedures]);
        },
        (error) => {
          this.backendErrors = error.error.errors;
          this.backendErrorKeys = Object.getOwnPropertyNames(this.backendErrors);
          console.error('Login failed:', error);
          window.scrollTo(0, 0);
        }
      );
    }
    

  }

}
