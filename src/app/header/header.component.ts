import { UserAuthService } from './../_services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private UserAuthService:UserAuthService, private router: Router,public userService: UserService) { 
    
    
  }
    init:any;
  ngOnInit(): void {
    
  }
  public isLoggedIn() {
    console.log("hhhhhh");
    console.log("la valeur du retour est "+this.UserAuthService.isLoggedIn());
    return this.UserAuthService.isLoggedIn();
  }
  public logout() {
    console.log("le message est "+this.UserAuthService.isLoggedIn());
    this.UserAuthService.clear();
    this.router.navigate(['/login']);
  }

}
