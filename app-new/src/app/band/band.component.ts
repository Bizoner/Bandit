import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BandsService} from "../bands.service";
import {PlayerService} from "../player.service";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  loading: Boolean;
  loadingError: String;
  bandData : Object = {};
  bandId : string;

  constructor(private loginService: RegisterService, private http: HttpClient, private route: ActivatedRoute, private router: Router ,private bandsService: BandsService, private playerService: PlayerService) {
    this.route.params.subscribe(params => {
      this.bandId = params['id'];
    });
    this.loading = true;
    this.bandsService.getBandData({id: this.bandId}).subscribe((data) => {
      this.bandData = data;
      this.loading = false;
    },(err) => {
      this.loading = false;
      this.loadingError = err.error;
    });
  }

  createNewSong() {
      this.bandsService.createNewSong({id: this.bandId}).subscribe((data) => {
        this.redirectToStudio(data);
      },(err) => {
        console.error(err);
      });
  }

  redirectToStudio(data) {
    window.location.href = 'http://localhost:3003/songstudio/?id='+ data._id
  }

  playSong(songId) {
    const audioObj = {
      songId
    };
    this.playerService.sendToPlayer(audioObj);
  }

  ngOnInit() {
  }

  // goToEdit(){
  //   console.log( 'the id is : ' + this.id)
  //   this.router.navigate(['/editBand' , this.id]  );
  // }

}
