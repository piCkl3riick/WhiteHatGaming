import { Component, OnInit } from '@angular/core';
import { FeedService } from '../core/services/feed.service';
import { Game } from '../shared/game.model';

@Component({
  selector: "app-roulette",
  templateUrl: "./roulette.component.html",
  styleUrls: ["./roulette.component.scss"],
})
export class RouletteComponent implements OnInit {
  _games: Game[] = [];
  _roulette: Game[] = [];
  _newGames: Game[] = [];

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

      this._roulette = this._games.filter((o) =>
        o.categories.includes("roulette")
      );
      this._newGames = this._games.filter((n) => n.categories.includes("new"));
    });
  });

  }
}
