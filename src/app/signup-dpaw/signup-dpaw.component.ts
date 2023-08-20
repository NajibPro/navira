import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { InputfunctionsService } from '../services/inputfunctions.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-dpaw',
  templateUrl: './signup-dpaw.component.html',
  styleUrls: ['./signup-dpaw.component.css']
})
export class SignupDpawComponent {
  constructor(public inputFunctions: InputfunctionsService, private router: Router, private http: HttpClient, private auth: AuthService){

  }

  login = '/login';
  procedures = '/procedures'

  formData = {
    lname: "",
    fname: "",
    wilaya: "",
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  }

  backendErrors: any;
  backendErrorKeys: string[] = [];

  @ViewChild('signUpFormDPAW') signUpFormDPAW!: NgForm;
  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;
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

  isPasswordMatch(): boolean {
    return this.formData.password === this.formData.cpassword;
  }

  containsNonNumberCharacters(inputString: string): boolean {
    const nonNumberRegex = /[^0-9]/;
    return nonNumberRegex.test(inputString);
  }

  userNameNotUsed() : boolean {
    return true;
  }

  onSubmit(){

    if(this.signUpFormDPAW.invalid){
      this.showErrors = true;
      return;
    }

    const {fname, lname, wilaya, userName, email, password, cpassword} = this.formData;

    this.auth.signupDPAW(lname, fname, wilaya, userName, email, password, cpassword).subscribe(
      (response) => {
        this.backendErrors = null;
        this.auth.isLoggedInSubject.next(true)
        console.log(response)
        this.router.navigate([this.procedures])
      },

      (error) => {
        this.backendErrors = error.error.errors;
        this.backendErrorKeys = Object.getOwnPropertyNames(this.backendErrors);
        console.log(this.backendErrorKeys);
        console.error('Signup failed:', error.error.errors);
        window.scrollTo(0, 0);
      }
    )

  }
}
