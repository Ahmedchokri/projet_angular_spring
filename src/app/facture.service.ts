import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from './modals/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  list: Facture[]; 
  factureByIdUrl:string='http://localhost:8233/SpringMVC/Facture/getfacturebyclient';
  cancelUrl:string='http://localhost:8233/SpringMVC/Facture/cancelfacture';
  factureUrl:string='http://localhost:8233/SpringMVC/Facture/getallfacture';
  datefactureUrl:string='http://localhost:8089/SpringMVC/servlet/getalldatefacture';
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http:HttpClient) {

   
   }
    addfacture(facture,id):Observable<number>{
      const username='ahmed';
      const password='chokri';
      const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
      return this._http.post<number>('http://localhost:8233/SpringMVC/Facture/add-Facture/'+id,facture,{headers});
    }
    cancelFacture(id:  number){
 
      return this._http.put('http://localhost:8233/SpringMVC/Facture/cancelFacture/'+id,this.httpOptions);
    }
    getFactureById(idfacture:number):Observable<Facture>{
  
      return  this._http.get<Facture>(this.factureUrl+'/'+idfacture);
  }
     getFactureList():Observable<Facture[]>{
       return this._http.get<Facture[]>(this.factureUrl);
       
     }
     gettotalRevenue():Observable<number>{
      return this._http.get<number>('http://localhost:8233/SpringMVC/Facture/totalrevenue');
      
    }

    getRevenuebycategorieclient():Observable<[]>{
      return this._http.get<[]>("http://localhost:8233/SpringMVC/Facture/getrevenuebycategorieclient");
    }
    getDateFacture():Observable<Date[]>{
      return this._http.get<Date[]>("http://localhost:8233/SpringMVC/Facture/getalldatefacture");
      
    }
    }
