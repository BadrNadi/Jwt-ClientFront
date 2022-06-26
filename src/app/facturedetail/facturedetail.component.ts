import { Client } from './../client';
import { NgForm } from '@angular/forms';
import { AgentService } from './../agent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Agent } from '../agent';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-facturedetail',
  templateUrl: './facturedetail.component.html',
  styleUrls: ['./facturedetail.component.css']
})
export class FacturedetailComponent implements OnInit {
  myParam: any | undefined;
  id:any;
  data:any=[];
  name2:any;
  client:Client|undefined;
  montant:number|undefined;
  constructor(private _active: ActivatedRoute,private userservice:UserService,private agentService:AgentService,private location: Location,private router:Router,private clientservice:ClientService) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id');
      this.data=this.userservice.alldata[this.id-1];
      this.userservice.img=this.data;
      
      
      
    
    });
  }
   facture(clientForm:NgForm){
        
      this.clientservice.getClientByName(clientForm.value['nom']).subscribe(
      (response:Client)=>{
        this.client=response;
        this.clientservice.client=this.client;
        // this.agentService.lastname=clientForm.value['nom'];
        // this.agentService.name=response.name;
        this.clientservice.montant=clientForm.value['montant'];
        console.log(response.id);
        console.log(this.client);
        // console.log("----------------");
        // console.log(this.agentService.agent);
        // console.log(JSON.stringify(response).split(":")[2]);
        // this.name2=(JSON.stringify(response).split(":")[2]).split(",")[0];
        // console.log(JSON.stringify(this.name2));
        // this.montant=parseInt(this.name2);
        // console.log(JSON.stringify(response));
        // console.log(response);
        if(response!=undefined && response.solde>clientForm.value['montant']){
          // this.agentService.lastname="bingo";
          console.log("bingo");
          this.client.solde= this.client.solde-parseInt(clientForm.value['montant']);
          this.clientservice.updateClient(this.client).subscribe(
            (response:Client)=>{
              
              console.log("++++++++++");
              console.log(response);
            }
          );
          
        }
        console.log(response.solde);
        
    
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
      );
      // console.log(clientForm.value['nom']);
      // console.log(clientForm.value['montant']);

      this.router.navigate(["/facture",this.client?.id]);
      
            

  }
  getback(clientForm:NgForm){
    // this.location.back(); 
    // Navigates back in the platform's history
   
        
    this.clientservice.getClientByName(clientForm.value['nom']).subscribe(
      (response:Client)=>{
        this.client=response;
        // this.agentService.lastname=clientForm.value['nom'];
        // this.agentService.name=response.name;
        this.clientservice.montant=clientForm.value['montant'];
        console.log(response.id);
        console.log(this.client);
        // console.log("----------------");
        // console.log(this.agentService.agent);
        // console.log(JSON.stringify(response).split(":")[2]);
        // this.name2=(JSON.stringify(response).split(":")[2]).split(",")[0];
        // console.log(JSON.stringify(this.name2));
        // this.montant=parseInt(this.name2);
        // console.log(JSON.stringify(response));
        // console.log(response);
        if(response!=undefined && response.solde>clientForm.value['montant']){
          // this.agentService.lastname="bingo";
          console.log("bingo");
          this.client.solde= this.client.solde-parseInt(clientForm.value['montant']);
          this.clientservice.updateClient(this.client).subscribe(
            (response:Client)=>{
              
              console.log("++++++++++");
              console.log(response);
            }
          );
          
        }
        console.log(response.solde);
        
    
      },
      (error:HttpErrorResponse)=>{console.log("cc");}
      );
      // console.log(clientForm.value['nom']);
      // console.log(clientForm.value['montant']);
      this.location.back(); 

  }
  

}
