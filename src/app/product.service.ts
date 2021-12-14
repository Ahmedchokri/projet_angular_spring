import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { produit } from './modals/product';
import { Observable } from 'rxjs';
import { detailproduit } from './modals/detailproduit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'})}
  constructor(private _http:HttpClient) { }

  addProduct(produit,idstock,idrayon,detail){
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)});
    return this._http.post('http://localhost:8233/SpringMVC/produit/add-produit/'+idstock+'/'+idrayon+'/'+detail,produit,{headers});
  }

  deleteProduct(id: number){
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)});
    return this._http.delete<produit>('http://localhost:8233/SpringMVC/produit/remove-produit/'+id,{headers});
  }
  getproduct(id:number){
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this._http.get<produit>('http://localhost:8233/SpringMVC/produit/retrieve-produit/'+id,{headers});
  }
 
  allproducts():Observable<produit[]>{
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this._http.get<produit[]>('http://localhost:8233/SpringMVC/produit/retrieve-all-produits/',{headers});
  };
  modifyproduct (formserial):Observable<produit>{
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this._http.put<produit>('http://localhost:8233/SpringMVC/produit/modify-produit/',formserial,{headers});
  };
  getquantitystockbycategorie():Observable<[]>{
 
    return this._http.get<[]>('http://localhost:8233/SpringMVC/stock/getstock/');
};
getquantitybycategorie():Observable<[]>{
 
  return this._http.get<[]>('http://localhost:8233/SpringMVC/stock/getstock1/');
};
getmostproductsale():Observable<produit>{

  return this._http.get<produit>('http://localhost:8233/SpringMVC/produit/getmostproductsale');
}
}
