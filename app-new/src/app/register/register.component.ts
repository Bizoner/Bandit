import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  file: any;

  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null,[Validators.email , Validators.required]),
    genre: new FormControl( null, Validators.required),
    instrument: new FormControl( null, Validators.required),
    pass: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required),
  });

  constructor(private _router:Router, private register_s:RegisterService) {}

  ngOnInit() {
  }

  register() {
    if ( !this.registerForm.valid || ( this.registerForm.controls.pass.value != this.registerForm.controls.cpass.value) ) {
      console.log('Invalid Form');
      return;
    }
    this.registerForm.value.file = this.file;
    this.register_s.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data=> { console.log(data); this.register_s.updateUserSuccessObj(data);  this._router.navigate(['/index']);},
        error=> console.error(error)
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

