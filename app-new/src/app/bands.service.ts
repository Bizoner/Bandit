import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor( private http : HttpClient ) {
  }

  updateBand(body:any) {
    return this.http.post('http://localhost:3003/band/updateBand'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getSongUrl(body:any) {
    return this.http.post('http://localhost:3003/bands/getSongUrl'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  favoriteSong(body:any) {
    return this.http.post('http://localhost:3003/bands/favoriteSong'  ,body, {
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getFavorites() {
    return this.http.get('http://localhost:3003/bands/getFavorites'  , {
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  createNewBand(body:any) {
    return this.http.post('http://localhost:3003/bands/createNewBand'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  createNewSong(body:any) {
    return this.http.post('http://localhost:3003/bands/createNewSong'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getBandData(body:any) {
    return this.http.post('http://localhost:3003/bands/getBandData'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getAllSongs() {
    return this.http.post('http://localhost:3003/bands/getAllSongs'  ,{},{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  /*getBands() {
    return this.http.get('http://localhost:3003/api/tasks')
      .pipe(
        map(res => res.json())
      )
  }
  addBand(newBand){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3003/api/task' , JSON.stringify(newBand), {headers; headers})
      .pipe(
        map( res => res.json())
    )
  }*/
}


