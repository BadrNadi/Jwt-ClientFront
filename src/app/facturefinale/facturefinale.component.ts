import { ClientService } from './../client.service';
import { UserAuthService } from './../_services/user-auth.service';
import { AgentService } from './../agent.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Agent } from '../agent';
import { NgForm } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-facturefinale',
  templateUrl: './facturefinale.component.html',
  styleUrls: ['./facturefinale.component.css']
})
export class FacturefinaleComponent implements OnInit {
  toogle:boolean=true;
  data:any=[];
  data1:any=[];
  name:string|undefined;
  name1:string|undefined;
  name2:number|undefined;
  id?:any;
  agent:Agent|undefined;
  latest_date:any;
  client:any;
  constructor(private _active: ActivatedRoute,private userservice:UserService,private agentservice:AgentService,private clientservice:ClientService,private UserAuthService:UserAuthService,private router:Router,private ClientService:ClientService) { 
    this.client=this.ClientService.client;
  }

  ngOnInit(): void {
   this.data=this.userservice.img;
   console.log("limage"+this.data);
   this.data1=new Date();
   this.name=this.agentservice.lastname;
   this.name1=this.agentservice.name;
   this._active.paramMap.subscribe((params:ParamMap)=>{
    this.id=params.get('id');
    this.name2=this.clientservice.montant
    
    
    
    
  
  });
    // this.latest_date =this.datepipe.transform(this.data1, 'yyyy-MM-dd');
  //  this.data1 = this.datePipe.transform(this.data1, 'dd/MM/yyyy');
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
  save(clientForm:NgForm){
    if(this.toogle){
      const button=document.getElementById('close-employee-form1');
      button?.click();
    console.log("99999999999999999999");
    
    console.log(this.client?.password);
    console.log("0000-0-0-0-0-0-0---0");
    this.client.password=clientForm.value['password'];
    console.log(clientForm.value['password']);
    this.clientservice.updateClient(this.client).subscribe(
      (response:Client)=>{
        
        console.log("++++++++++");
        console.log(response);
      }
    );
    
    }
  }
  validateEmail(ps1:string,ps2:string){
 

    if(!ps1.match(ps2)) {
     this.toogle=false;
    } else {
      this.toogle=true;
     
  
    }
  }


}
