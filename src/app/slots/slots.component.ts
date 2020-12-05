import { Component, OnInit } from '@angular/core';
import { FeedService } from '../core/services/feed.service';
import { Game, Jackpot } from '../shared/game.model';

@Component({
  selector: "app-slots",
  templateUrl: "./slots.component.html",
  styleUrls: ["./slots.component.scss"],
})
export class SlotsComponent implements OnInit {
  _games: Game[] = [];
  _newGames: Game[] = [];

  _slots: Game[] = [];

  constructor(private feedService: FeedService) {

  }
  ngOnInit() {

    this.feeds();


  }



  feeds() {

    this.feedService.getGames().subscribe((data) => {
      this.feedService.getFeedJackpot().subscribe((value) => {
        this._games = data.map((item) => {
          const [sameId] = value
            .filter((x) => x.game === item.id)
            .map((itema) => (item.amount = itema.amount));
          return { ...item, sameId };
        });
    this.filterSlots();
      });
    });
  }


  filterSlots() {
        this._slots = this._games.filter((i) => i.categories.includes("slots"));
  }

}
