
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from './agent';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AgentService {
  agent:Agent|undefined;
  lastname:string|undefined;
  name:string|undefined;

  private apiServerUrl = environment.urla;
  HttpClient: any;

  constructor(private http: HttpClient){}

  public getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.apiServerUrl}/agent/all`);
  }

  public addAgent(employee: Agent): Observable<Agent> {
    return this.http.post<Agent>(`${this.apiServerUrl}/agent/add`, employee);
  }

  public updateAgent(employee: Agent): Observable<Agent> {
    return this.http.put<Agent>(`${this.apiServerUrl}/agent/update`, employee);
  }

  public deleteAgent(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/agent/delete/${employeeId}`);
  }
  public getAgentByName(name:string): Observable<Agent> {
   this.http.get<Agent>(`${this.apiServerUrl}/agent/facture/${name}`).subscribe(
      (response:Agent)=>{
        this.agent=response;

      }
    );
    return this.http.get<Agent>(`${this.apiServerUrl}/agent/facture/${name}`);
  }

}