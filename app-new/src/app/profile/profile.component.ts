import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  _id: String='';
  firstName: String='';
  lastName: String='';
  genre: String='';
  email: String='';
  userData : Observable<any>;


  imageUrl: string = "../../assets/userImg.png";


  constructor( private _user: RegisterService, private router: Router) {
    this._user.user()
      .subscribe(
        data => {     console.log( JSON.stringify(data) ); this.addDetails(data) },
        error => console.error(error)
       );
  }

  logout() {
    this._user.logout()
      .subscribe(
        data => {
          this._user.updateUserSuccessObj({});
          window.location.href = 'https://shenkar-band-it.herokuapp.com/'
          },
        error => console.error(error)
      );
  }

  addDetails(data){
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.genre = data.genre;
    this.email = data.email;
  }
  ngOnInit() {
  }

  goToEdit(){
    this.router.navigate(['/editProfile/:id'] );
  }

}
