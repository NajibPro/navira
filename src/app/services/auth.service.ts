import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post('http://127.0.0.1:8000/auth/login', body);
  }

  signup(moarale: boolean, last_name: string, first_name: string, bday: Date, wilaya: string, CNN: string, phone: string, 
    username: string, company_name: string, email: string, password: string, password_confirmation: string){
      if (wilaya.length >= 2 && wilaya[1] !== '.') {
        wilaya = wilaya.substring(0, 2);
      } else {
        wilaya = wilaya[0];
      }
      let datePipe = new DatePipe('en-US');
      let birthdate = datePipe.transform(bday, 'yyyy-MM-dd')
      const body = {moarale ,last_name, first_name, birthdate, wilaya, CNN, phone, username, company_name, email, password, password_confirmation};
      console.log(body);
      return this.http.post('http://127.0.0.1:8000/auth/register', body);
  }
}
