import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  alldata:Array<any>=[
    {"id":1,"img":"../assets/iam.png","title":"IAM RECHARGES","radio":"TELEPHONIE ET INTERNET SIM"},
    {"id":2,"img":"../assets/iam.png","title":"IAM RECHARGES","radio":"TELEPHONIE ET INTERNET SIM1"}
  ];
  img :string="";
  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpclient:HttpClient,private UserAuthService:UserAuthService) { }
  public login(loginData: any) {
    console.log("declancher");
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });

  }
  public roleMatch(allowedRoles:any): any {
    let isMatch = false;
    const userRoles: any = this.UserAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          console.log("1-"+userRoles[i].roleName);
          console.log("2-"+allowedRoles[j]);  
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

}
