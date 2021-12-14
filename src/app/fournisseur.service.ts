import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Fournisseur } from './modals/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  list: Fournisseur[];
  fournisseurUrl:string='http://localhost:8233/SpringMVC/Fournisseur/retrieveallfournisseurs';
  fournisseurByIdUrl:string='http://localhost:8233/SpringMVC/Fournisseur/retrieveFournisseur';
  deleteUrl:string='http://localhost:8233/SpringMVC/Fournisseur/removefournisseur';
  addUrl:string='http://localhost:8233/SpringMVC/Fournisseur/addFournisseur/';
  updateUrl:string='http://localhost:8233/SpringMVC/Fournisseur/modify-fournisseur';
   constructor(private route:Router ,  private _http:HttpClient) { }
 
   getAllFournisseurs():Observable<Fournisseur[]>{
     return this._http.get<Fournisseur[]>(this.fournisseurUrl);
     
   }
 
   deleteFournisseur (idfournisseur): Observable<Fournisseur> {
     const url=this.deleteUrl+'/'+idfournisseur;
     return this._http.delete<Fournisseur>(url);
     }
 
     addFournisseur(fournisseur:Fournisseur){
       return this._http.post(this.addUrl,fournisseur,this.httpOptions);
 
     }
     gettotalfournisseur():Observable<number>{
      return this._http.get<number>("http://localhost:8233/SpringMVC/Fournisseur/totalFournisseur");

    }

     
     getFournisseurById(idfournisseur):Observable<Fournisseur>{
       return this._http.get<Fournisseur>(this.fournisseurByIdUrl+'/'+idfournisseur)
       }
       ;
 
     
     // getFournisseurById(idfournisseur:number):Observable<Fournisseur>{
   
     //      return  this._http.get<Fournisseur>(this.fournisseurUrl+'/'+idfournisseur);
     // }
     updateFournisseur(fournisseur:Fournisseur):Observable<Fournisseur>{
       return this._http.put<Fournisseur>(this.updateUrl, fournisseur,this.httpOptions);
     }
     httpOptions = {
       headers: new HttpHeaders({
       'Content-Type': 'application/json'
       })
       }
}
function catchError(arg0: (err: any) => Observable<never>): import("rxjs").OperatorFunction<Fournisseur, Fournisseur> {
  throw new Error('Function not implemented.');
}

