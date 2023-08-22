import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signup = '/signup';
  login = '/login';
  procedures = '/procedures';

  backendErrors: any;
  backendErrorKeys: string[] = [];
  
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

  isPersonMoral: boolean = true;
  isPersonPhysique: boolean = false;

  formData = {
    personMoral: this.isPersonMoral,
    lname: "",
    fname: "",
    cname: "",
    bday: Date(),
    wilaya: "",
    cardNumber: "",
    phone: "213",
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  }

  @ViewChild('signUpForm') signUpForm!: NgForm;
  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;
  showErrors : boolean = false;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
      
  }

  detectErrors(event: any, error: any): void{
    const clickedElement = event.target;
    clickedElement.style.borderColor = error? "#ff0000" : "#00ff00";
  }

  commitErrors(event: any, error: any): void{
    const clickedElement = event.target;
    clickedElement.style.borderColor = error? "#ff0000" : "#0075FF";
  }

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

    if(this.signUpForm.invalid){
      this.showErrors = true;
      this.inputElements.forEach(input => {
        this.commitErrors(input.nativeElement, input.nativeElement.invalid)
      });
      return;
    }

    const {personMoral ,lname, fname, bday, wilaya, cardNumber, phone, userName, cname, email, password, cpassword} =
     this.formData;
    this.authService.signup(personMoral ,lname, fname, new Date(this.formData.bday), wilaya, cardNumber,
     phone, userName, cname, email, password, cpassword).subscribe(
      (response: any) => {
        const role = 'user';
        const token = response.token;
        this.backendErrors = null;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        this.authService.isLoggedInSubject.next(true)
        this.authService.roleSubject.next(role)
        console.log(response.token)
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
  switchPersonMoral() : void{
    this.isPersonMoral = true;
    this.isPersonPhysique = false;
  }

  switchPersonPhysique() : void{
    this.isPersonMoral = false;
    this.isPersonPhysique = true;
  }
}
