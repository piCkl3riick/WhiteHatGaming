import { Component, OnInit } from "@angular/core";
import { FeedService } from "../core/services/feed.service";
import { Game } from "../shared/game.model";

@Component({
  selector: "app-top-games",
  templateUrl: "./top-games.component.html",
  styleUrls: ["./top-games.component.scss"],
})
export class TopGamesComponent implements OnInit {
  _games: Game[] = [];
  _newGames: Game[] = [];

  _topGames: Game[] = [];

  constructor(private feedService: FeedService) {
    this.feedService.getGames().subscribe((data) => {
      this.feedService.getFeedJackpot().subscribe((value) => {
        this._games = data.map((item) => {
          const [sameId] = value
            .filter((x) => x.game === item.id)
            .map((itema) => (item.amount = itema.amount));
          return { ...item, sameId };
        });

        this._topGames = this._games.filter(
          (t) => t.categories.includes("top")
        );
        this._newGames = this._games.filter((n) =>
          n.categories.includes("new")
        );
      });
    });
  }

  ngOnInit() {}
}
