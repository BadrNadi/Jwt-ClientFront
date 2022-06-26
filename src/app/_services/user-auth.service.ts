import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRoles(roles: []) {
    
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    // console.log(JSON.parse(localStorage.getItem('roles')|| 'null'));
    return JSON.parse(localStorage.getItem('roles')|| 'null'|| '{}');
  }
    static token:string;
  public setToken(jwtToken: string) {
    UserAuthService.token=jwtToken;
    console.log("le token est "+jwtToken);
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    // console.log("apres le set voila le token "+localStorage.getItem('jwtToken'|| 'null'|| '{}'));
    // console.log(JSON.parse(localStorage.getItem('jwtToken')|| 'null'));
    return UserAuthService.token;
    
  }

  public clear(){

    localStorage.clear();
   
  }

  public isLoggedIn():boolean {
    console.log(this.getRoles()==null);
    return this.getRoles()==null;
  }
}
