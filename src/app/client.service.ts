import { Injectable } from '@angular/core';
import { Client } from './modals/client';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  list:Client[];
  client:Client;

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }


  constructor(private _http:HttpClient) { }

  getClient():Observable<Client[]>{
    return this._http.get<Client[]>("http://localhost:8233/SpringMVC/client/retrieve-all-clients");
  }
  addclient(client:Client):Observable<Object>{
    return this._http.post("http://localhost:8233/SpringMVC/client/add-client",client);
  }
  deleteClient (clientId:number): Observable<Client> {
    
  
    return this._http.delete<Client>("http://localhost:8233/SpringMVC/client/remove-client/"+clientId);
    
   }
   consulterClient(id:number):Observable<Client> {
    return this._http.get<Client>("http://localhost:8233/SpringMVC/client/retrieve-client/"+id);
    
  }
  updateClient(c :Client):Observable<Client>{
    console.log(c);
  // this.deleteClient(c);
  //  this.addClient(c);
   return this._http.put<Client>("http://localhost:8233/SpringMVC/client/modify-client/",c,this.httpOptions);

 }
 getClientById(clientId:number):Observable<Client>{
  
  return this._http.get<Client>("http://localhost:8233/SpringMVC/client/retrieve-client/"+clientId);
}
gettotalclient():Observable<number>{
  return this._http.get<number>("http://localhost:8233/SpringMVC/client/totalclient/");
}
getclientfidele():Observable<[]>{
  return this._http.get<[]>("http://localhost:8233/SpringMVC/client/clientfidele");
}
nombredeclientparprofession():Observable<[]>{
  return this._http.get<[]>("http://localhost:8233/SpringMVC/client/nombredeclientparprofession");
}
}
