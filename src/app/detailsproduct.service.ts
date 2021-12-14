import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { detailproduit } from './modals/detailproduit';

@Injectable()
export class DetailsproductService {
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})};


   
  constructor(private _http:HttpClient) { 
 
    
  }
  getproduitdetail(id):Observable<detailproduit>{
    return this._http.get<detailproduit>('http://localhost:8233/SpringMVC/detailproduit/getdetailsduproduit/'+id);
  };
  modifydetailproduct (formserial):Observable<detailproduit>{
    return this._http.put<detailproduit>('http://localhost:8233/SpringMVC/detailproduit/modify-detailproduit/',formserial,this.httpOptions);
  };
  addddetailproduct (formserial):Observable<number>{
    return this._http.post<number>('http://localhost:8233/SpringMVC/detailproduit/adddetailproduct',formserial,this.httpOptions);
  };
  
}
