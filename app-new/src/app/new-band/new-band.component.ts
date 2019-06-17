import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {BandsService} from "../bands.service";
import {NgForm} from "@angular/forms";

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

  constructor(private http: HttpClient, private bandsService: BandsService) {
  }

  ngOnInit() {
  }

  public onSubmit() {
      const objReq = {
          name : this.name,
          description: this.description,
          members: this.members,
          genre : this.genre,
          file : this.file,
      };
      this.bandsService.createNewBand(objReq).subscribe((data) => {
        this.goToPage(data);
      },(err) => {

      })
      // const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/createNewBand",objReq);
      // req.subscribe((data)=>{
      //     window.location.href = 'https://shenkar-band-it.herokuapp.com/bands/'+data._id
      // })
  }

  goToPage(data) {
    window.location.href = 'https://shenkar-band-it.herokuapp.com/bands/'+data._id
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
