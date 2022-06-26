import { UserAuthService } from './../_services/user-auth.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserService,private UserAuthService:UserAuthService,private Router:Router ) { }

  ngOnInit(): void {
  }
  public login(loginForm:NgForm){
    console.log("yhis too");
    this.UserService.login(loginForm.value).subscribe(
      (response: any) => {

        this.UserAuthService.setRoles(response.user.role);
        this.UserAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        console.log("---------------");
        console.log("le role est "+role);
        if (role === 'Admin') {
          this.Router.navigate(['/admin']);
        } else {
          this.Router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
