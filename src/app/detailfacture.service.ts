import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detailfacture } from './modals/detailfacture';

@Injectable({
  providedIn: 'root'
})
export class DetailfactureService {

  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http:HttpClient) { }





  adddetailfacture(detailfacture,produiid,factureid):Observable<number>{
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this._http.post<number>('http://localhost:8233/SpringMVC/Facture/add-detailFacture/'+produiid+'/'+factureid,detailfacture,{headers});
  }
  getdetailfactures(factureid):Observable<Detailfacture[]>{
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this._http.get<Detailfacture[]>('http://localhost:8233/SpringMVC/Facture/getdetailsfacture/'+factureid,{headers});
  }
}
