import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post('/api/login/', body);
  }

  signup(personMoral: boolean, lname: string, fname: string, bday: Date, wilaya: string, cardNumber: Number, phone: Number, 
    email: string, password: string){
      const body = {personMoral ,lname, fname, bday, wilaya, cardNumber, phone, email, password};
      return this.http.post('/api/signup/', body);
  }
}
