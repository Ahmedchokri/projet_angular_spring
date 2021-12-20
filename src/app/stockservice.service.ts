import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './modals/stock';

@Injectable({
  providedIn: 'root'
})
export class StockserviceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }


  deleteStock (ry: Stock | number): Observable<Stock> {
    const id = typeof ry === 'number' ? ry : ry.idstock;
    const url="http://localhost:8233/SpringMVC/stock/removestock/"+id;
    return this.http.delete<Stock>(url);
    }
    updateStock(sto:Stock):Observable<Stock>{
      return this.http.put<Stock>("http://localhost:8233/SpringMVC/stock/modifystock",sto);

     }
    addStock (Stock: object): Observable<object> {  
      return this.http.post('http://localhost:8233/SpringMVC/stock/addStock', Stock);  }


  getalarmstock():Observable<String>{
    return this.http.get<String>('http://localhost:8233/SpringMVC/stock/getalarm');
  }
  gettotalstock():Observable<number>{
    return this.http.get<number>('http://localhost:8233/SpringMVC/stock/totalstock');
  }
  RetrieveallStock():Observable<Stock[]>{
    const username='ahmed';
    const password='chokri';
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Basic ' + window.btoa(username + ':' + password)}); 
    return this.http.get<Stock[]>('http://localhost:8233/SpringMVC/stock/Retrieveallstock',{headers});
  }
}
