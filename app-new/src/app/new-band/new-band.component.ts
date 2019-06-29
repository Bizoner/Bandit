import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {BandsService} from "../bands.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.css']
})
export class NewBandComponent implements OnInit {

  file: any;
  name: String;
  description: String;
  members: String;
  genre: String;
  submitted: Boolean;
  submitError: String;
  loading: Boolean;

  constructor(private http: HttpClient, private bandsService: BandsService, private _router:Router) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    if (!this.name || !this.genre || !this.file) {
      return;
    }
      const objReq = {
          name : this.name,
          description: this.description,
          members: this.members,
          genre : this.genre,
          file : this.file,
      };
      this.loading = true;
      this.bandsService.createNewBand(objReq).subscribe((data) => {
        this.goToPage(data);
      },(err) => {
        this.loading = false;
        this.submitError = err.error;
      });
  }

  goToPage(data) {
    this._router.navigate(['/band/'+data._id]);
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
