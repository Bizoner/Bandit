import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from "../player.service";
import { BandsService} from "../bands.service";
import { RegisterService} from "../register.service";

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css']
})
export class SoundPlayerComponent implements OnInit {

  songId: String;
  favorited: Boolean = false;
  subscription: Subscription;
  currentAudioUrl: String;
  title: String;
  bandName: String;
  icon: String;
  isInit: Boolean = true;

  constructor(private playerService: PlayerService, private bandsService: BandsService, private registerService: RegisterService) {
    this.subscription = this.playerService.playAudio().subscribe(audio => {
      this.songId = audio.songId;
      this.bandsService.getSongUrl(audio).subscribe(
        data => {
          this.setUrl(data);
        },
        err => {
          console.error(err);
        },
      )
    });
  }

  setUrl (data) {
    this.currentAudioUrl = data.lastExportedUrl;
    this.title = data.title;
    this.bandName = data.bandName;
    this.icon = data.bandIcon;
    this.isInit = false;
  }

  isLoggedIn () {
    const user = this.registerService.getUser();
    if (user && user._id) {
      return true;
    } else {
      return false;
    }
  }

  addToFavorite() {
    this.bandsService.favoriteSong({songId: this.songId}).subscribe(
      data => {
        this.favorited = true;
      },
      err => {
        console.error(err);
      },
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
