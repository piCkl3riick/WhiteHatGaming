import { Component, OnInit } from '@angular/core';
import { FeedService } from '../core/services/feed.service';
import { Game } from '../shared/game.model';

@Component({
  selector: "app-live",
  templateUrl: "./live.component.html",
  styleUrls: ["./live.component.scss"],
})
export class LiveComponent implements OnInit {
  _games: Game[] = [];
  _live: Game[] = [];
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

        this._live = this._games.filter((o) => o.categories.includes("live"));
        this._newGames = this._games.filter((n) =>
          n.categories.includes("new")
        );
      });
    });
  }
}
