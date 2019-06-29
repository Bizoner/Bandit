import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../register.service";
import {BandsService} from "../bands.service";

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.css']
})
export class EditBandComponent implements OnInit {

  bandData : Observable<any>;
  id : string;

  name : String;
  genre : String;
  description : String;
  icon : String;

  newBandForm:FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    genre: new FormControl(null,[Validators.required , Validators.required]),
    description: new FormControl( null, Validators.required),
    icon: new FormControl( null, Validators.required)
  });

  constructor( private http: HttpClient, private route: ActivatedRoute, private _bands: BandsService, private _router: Router ) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/getBandData",{id: this.id});
    req.subscribe((data)=>{
      this.bandData = data;

      console.log('The edit Bands data: ' + JSON.stringify(this.bandData) );
      console.log('The edit id: ' + this.id );
    });
  }

  ngOnInit() {
  }

  updateBand(){
    console.log( 'Form:' + JSON.stringify(this.newBandForm.value) );
    const updateObj = Object.assign(this.newBandForm.value,{id:this.id});
    console.log(updateObj);
    this._bands.updateBand( JSON.stringify(updateObj) )
      .subscribe(
        data=> { console.log(data); this._router.navigate(['/band' , this.id]);},
        error=> console.error(error)
      )
  }
}
