import { ClientService } from './../client.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../_services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';
import { Client } from '../client';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:Array<any>=[];
 
  id:any;


  constructor(private UserAuthService:UserAuthService,private router:Router,private userservice:UserService,private ClientService:ClientService) { }

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
  send(event:any){
    this.data.push(event.value);
    console.log(this.data[0]);
    this.userservice.alldata.forEach((e)=>{
      if(e['radio']==this.data[0]){
        this.id=e['id'];
      }
      console.log("id is "+this.id);
    })


  }
  next(){
    this.router.navigate(['facturedetail',this.id]);
  }

  

}
