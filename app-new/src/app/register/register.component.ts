import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";
import {register} from "ts-node";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: Boolean;
  submitted: Boolean;
  file: any;
  firstName: string;
  lastName: string;
  email: string;
  genre: string;
  instrument: string;
  pass: string;
  cpass: string;
  submitError: string;
  wrongConfirmation: Boolean;

  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl(this.firstName, Validators.required),
    lastName: new FormControl(this.lastName, Validators.required),
    email: new FormControl(this.email,[Validators.email , Validators.required]),
    genre: new FormControl( this.genre, Validators.required),
    instrument: new FormControl( this.instrument, Validators.required),
    pass: new FormControl(this.pass, Validators.required),
    cpass: new FormControl(this.cpass, Validators.required),
    file: new FormControl(this.file, Validators.required),
  });

  constructor(private _router:Router, private register_s:RegisterService) {}

  ngOnInit() {
  }

  register() {
    console.log(this.firstName);
    this.submitted = true;
    if (!this.registerForm.valid) {
      return;
    }
    if (this.registerForm.controls.pass.value != this.registerForm.controls.cpass.value) {
      this.wrongConfirmation = true;
      return;
    } else {
      this.wrongConfirmation = false;
    }
    this.registerForm.value.file = this.file;
    this.loading = true;
    this.register_s.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data=> {this.register_s.updateUserSuccessObj(data);  this._router.navigate(['/index']);},
        error=> {this.loading = false; this.submitError = error.error}
      )
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = {
          filename: file.name,
          filetype: file.type,
          value: reader.result
        };
      };
    }
  }
}

