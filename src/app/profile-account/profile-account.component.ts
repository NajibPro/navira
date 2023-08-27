import { Component, ViewChild } from '@angular/core';
import { InputfunctionsService } from '../services/inputfunctions.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.css']
})
export class ProfileAccountComponent {
  constructor(public inputFunctions: InputfunctionsService){

  }

  formData = {
    lname: "",
    fname: "",
    bday: Date(),
    wilaya: "",
    phone: "",
    userName: "",
    email: "",
    photo: "",
  }

  oldData = {
    lname: "Mohamed Nadjib",
    fname: "Bentayeb",
    bday: new Date(2023, 8, 29),
    wilaya: "05. Batna",
    phone: "213562198660",
    userName: "Najib_03",
    email: "najibbentayeb03@gmail.com",
    photo: "",
  }

  @ViewChild('updateProfileForm') updateProfileForm!: NgForm;

  backendErrors: any;
  backendErrorKeys: string[] = [];
  showErrors : boolean = false;
  
  wilayat: string[] = [
    "1. Adrar",
    "2. Chlef",
    "3. Laghouat",
    "4. Oum El Bouaghi",
    "5. Batna",
    "6. Béjaïa",
    "7. Biskra",
    "8. Béchar",
    "9. Blida",
    "10. Bouira",
    "11. Tamanrasset",
    "12. Tébessa",
    "13. Tlemcen",
    "14. Tiaret",
    "15. Tizi Ouzou",
    "16. Alger",
    "17. Djelfa",
    "18. Jijel",
    "19. Sétif",
    "20. Saïda",
    "21. Skikda",
    "22. Sidi Bel Abbès",
    "23. Annaba",
    "24. Guelma",
    "25. Constantine",
    "26. Médéa",
    "27. Mostaganem",
    "28. M'Sila",
    "29. Mascara",
    "30. Ouargla",
    "31. Oran",
    "32. El Bayadh",
    "33. Illizi",
    "34. Bordj Bou Arréridj",
    "35. Boumerdès",
    "36. El Tarf",
    "37. Tindouf",
    "38. Tissemsilt",
    "39. El Oued",
    "40. Khenchela",
    "41. Souk Ahras",
    "42. Tipaza",
    "43. Mila",
    "44. Aïn Defla",
    "45. Naama",
    "46. Aïn Témouchent",
    "47. Ghardaïa",
    "48. Relizane",
    "49. El M'ghair",
    "50. El Meniaa",
    "51. Ouled Djellal",
    "52. Bordj Badji Mokhtar",
    "53. Beni Abbes",
    "54. Timimoun",
    "55. Touggourt",
    "56. Djanet",
    "57. In Salah",
    "58. In Guezzam",
  ];

  containsNonNumberCharacters(inputString: string): boolean {
    const nonNumberRegex = /[^0-9]/;
    return nonNumberRegex.test(inputString);
  }

  onSubmit(){

    if(this.updateProfileForm.invalid){
      this.showErrors = true;
      return;
    }
  }

  onCancel(){
    
  }

}
