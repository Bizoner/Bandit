import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  getIndexData(){
    return this.http.get('http://localhost:3003/index/getIndexData',{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

}
