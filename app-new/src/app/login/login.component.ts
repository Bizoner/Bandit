import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: Boolean;
  submitted: Boolean;
  submitError: String;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl( null , [Validators.email , Validators.required] ),
    pass: new FormControl( null, Validators.required)
  });
  constructor( private _router:Router, private login_s:RegisterService ) {
  }
  login() {
    this.submitted = true;
    if ( !this.loginForm.valid ) {
      console.log('Invalid Form');
      return;
    }
    this.loading = true;
    this.login_s.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data=>{
          this.login_s.updateUserSuccessObj(data);
          this._router.navigate(['/index']);},
        error=> {this.loading = false; this.submitError = error.error}
      )
  }
  ngOnInit() {
  }
}
