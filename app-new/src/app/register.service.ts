import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private subject = new Subject<any>();
  userData: any;
  constructor( private http: HttpClient ) {

  }

  updateUserSuccessObj(user: any) {
    this.userData = user;
    this.subject.next(user);
  }

  getUserObj(): Observable<any> {
    return this.subject.asObservable();
  }

  getUser() {
    return this.userData;
  }

  logout(){
    return this.http.get('https://shenkar-band-it.herokuapp.com/users/logout',{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  register(body:any){
      return this.http.post('https://shenkar-band-it.herokuapp.com/users/register',body,{
        observe:'body',
        headers: new HttpHeaders().append('Content-Type' , 'application/json')
      });
  }
  updateUser(body:any) {
    console.log('hi from service');
    return this.http.post('http://localhost:3000/user/updateUser'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  login(body:any){
    return this.http.post('https://shenkar-band-it.herokuapp.com/users/login' ,body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  user(){
    return this.http.get('https://shenkar-band-it.herokuapp.com/users/getUserData',{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

}




