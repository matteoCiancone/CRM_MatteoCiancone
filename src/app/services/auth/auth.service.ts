import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from 'src/app/classes/auth/login-response';
import { AdminLogin } from 'src/app/classes/auth/admin-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!:LoginResponse;
  ifLogged:boolean= false
  constructor(private http: HttpClient,private router:Router) { }
  
  
  ngOnInit(): void {
  }

login(loginPayload: AdminLogin){
    return this.http.post<LoginResponse>(environment.APIurl + 'api/auth/login/', loginPayload)
}
logout(){
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
  this.router.navigate([''])
}

isLogged(){
  return localStorage.getItem('accessToken') != null;
}
utenteCorrente() {
  return localStorage.getItem('currentUser') || null;
}
userToken() {
  return localStorage.getItem('accessToken') || null;
}

}

