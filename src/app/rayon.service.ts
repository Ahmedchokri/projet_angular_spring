import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rayon } from './modals/rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

 
  list: Rayon[];
 
  rayonByIdUrl:string='http://localhost:8233/SpringMVC/rayon/retrieveRayon';
  deleteUrl:string='http://localhost:8233/SpringMVC/rayon/removeRayon';
  addUrl:string='http://localhost:8233/SpringMVC/rayon/add-rayon';
  updateUrl:string='http://localhost:8233/SpringMVC/rayon/modify-rayon';
   constructor(private route:Router ,  private _http:HttpClient) { }
 
   deleteRayon (rayon: Rayon): Observable<Rayon> {
     const idrayon = typeof rayon === 'number' ? rayon : rayon.idrayon;
     const url=this.deleteUrl+'/'+idrayon;
     return this._http.delete<Rayon>(url);
     }
 
     addRayon(rayon:Rayon){
      console.log(rayon);
      const username='ahmed';
      const password='chokri';
      const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
       return this._http.post(this.addUrl,rayon,{headers}); console.log(rayon);
     }
     getRayonById(idrayon:number):Observable<Rayon>{
   
          return  this._http.get<Rayon>(this.rayonByIdUrl+'/'+idrayon);
     }
     updateRayon( rayon:Rayon):Observable<Rayon>{
       return this._http.put<Rayon>(this.updateUrl, rayon , this.httpOptions);
     }
     httpOptions = {
       headers: new HttpHeaders({
       'Content-Type': 'application/json'
       })
       }
    Retrieveallrayon():Observable<Rayon[]>{
      const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
      return this._http.get<Rayon[]> ('http://localhost:8233/SpringMVC/rayon/Retrieveallrayon',{headers});
    }
}
