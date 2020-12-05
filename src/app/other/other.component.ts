import { Component, OnInit } from '@angular/core';
import { FeedService } from '../core/services/feed.service';
import { Game, Jackpot } from '../shared/game.model';

@Component({
  selector: "app-other",
  templateUrl: "./other.component.html",
  styleUrls: ["./other.component.scss"],
})
export class OtherComponent implements OnInit {
  _games: Game[] = [];
  _other: Game[] = [];

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
            this.filterOther();
          });
        });
  }


  filterOther() {

         this._other = this._games.filter(
           (o) =>
             o.categories.includes("virtual") ||
             o.categories.includes("fun") ||
             o.categories.includes("fun") ||
             o.categories.includes("ball")
         );
  }
}
