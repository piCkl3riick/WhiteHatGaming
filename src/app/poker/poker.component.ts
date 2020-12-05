import { Component, OnInit } from '@angular/core';
import { FeedService } from '../core/services/feed.service';
import { Game, Jackpot } from '../shared/game.model';

@Component({
  selector: "app-poker",
  templateUrl: "./poker.component.html",
  styleUrls: ["./poker.component.scss"],
})
export class PokerComponent implements OnInit {
  _games: Game[] = [];
  _newGames: Game[] = [];
  _poker: Game[] = [];

  _newJackpot: Jackpot[] = [];

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

         this._poker = this._games.filter((i) =>
           i.categories.includes("poker")
         );
         this._newGames = this._games.filter((n) =>
           n.categories.includes("new")
         );
       });
     });
  }
}
