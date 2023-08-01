import { Component, Input, OnInit } from '@angular/core';
import { Procedure } from './procedures';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
      
  }

  @Input() proceduresType : number = 0;

  proceduresList : Procedure[] = [
    { id: 1, type: 1, name: "Autorisation de pèche"},
    { id: 2, type: 1, name: "Remplacement des navires de pèche"},
    { id: 3, type: 1, name: "Romotorisation des navires de pèche"},
    { id: 4, type: 1, name: "Permis de pèche au thon rouge"},
    { id: 5, type: 1, name: "Documentation électronique des captures de thon rouge"},
    { id: 6, type: 1, name: "Autorisation d'acquisition et l'utilisation du matériel sensible"},
    { id: 7, type: 1, name: "Acquisition des navires de pêche hauturier"},
    { id: 8, type: 1, name: "Immatriculation des navires de pêche"},
    { id: 9, type: 2, name: "Autorisation pour la création et l’exploitation des établissements d’aquaculture"},
    { id: 10, type: 2, name: "L’acte d’octroi de concession pour la création d’un établissement aquacole"},
    { id: 11, type: 2, name: "Attestation d’exonération des droits de douanes et d’application du taux réduit de la TVA pour l’importation d’aliments destinés à l’aquaculture"},
    { id: 12, type: 2, name: "Importation d’intrants (aliments, alevins, naissains, géniteurs,…)"},
    { id: 13, type: 2, name: "Autorisation de la pisciculture intégrée à l’agriculture"},
    { id: 14, type: 2, name: "Autorisation d’exercice de la pêche continentale"},
    { id: 15, type: 3, name: "Immatriculation personnes physiques sédentaires"},
    { id: 16, type: 3, name: "Immatriculation personnes physiques non sédentaires"},
    { id: 17, type: 3, name: "Modification de l’immatriculation personnes physiques"},
    { id: 18, type: 3, name: "Immatriculation personnes morales"},
    { id: 19, type: 3, name: "Exportation des produits de la pêche"},
];


}
