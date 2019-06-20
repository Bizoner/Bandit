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
    return this.http.post('https://shenkar-band-it.herokuapp.com//band/updateBand'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getSongUrl(body:any) {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/getSongUrl'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  favoriteSong(body:any) {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/favoriteSong'  ,body, {
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getFavorites() {
    return this.http.get('https://shenkar-band-it.herokuapp.com//bands/getFavorites'  , {
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  createNewBand(body:any) {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/createNewBand'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  createNewSong(body:any) {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/createNewSong'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getBandData(body:any) {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/getBandData'  , body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  getAllSongs() {
    return this.http.post('https://shenkar-band-it.herokuapp.com//bands/getAllSongs'  ,{},{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  /*getBands() {
    return this.http.get('https://shenkar-band-it.herokuapp.com//api/tasks')
      .pipe(
        map(res => res.json())
      )
  }
  addBand(newBand){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://shenkar-band-it.herokuapp.com//api/task' , JSON.stringify(newBand), {headers; headers})
      .pipe(
        map( res => res.json())
    )
  }*/
}


