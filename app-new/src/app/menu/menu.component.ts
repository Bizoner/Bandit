import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../register.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  bands : any = [];
  subscription: Subscription;
  isLoggedIn: Boolean = false;
  constructor(private registerService: RegisterService, private http: HttpClient) {
    this.registerService.user().subscribe(data => {
      this.updateBands(data);
    }, (err) => {
      console.error(err);
    });

    this.subscription = this.registerService.getUserObj().subscribe(data =>{
      this.updateBands(data);
    })
  }

  updateBands(data) {
    this.isLoggedIn = true;
    this.bands = data.bands;
  }
  ngOnInit() {
  }

}
