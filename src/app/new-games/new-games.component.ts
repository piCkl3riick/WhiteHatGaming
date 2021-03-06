import { Component, OnInit } from "@angular/core";
import { FeedService } from "src/app/core/services/feed.service";
import { Game } from "../shared/game.model";

@Component({
  selector: "app-new-games",
  templateUrl: "./new-games.component.html",
  styleUrls: ["./new-games.component.scss"],
})
export class NewGamesComponent implements OnInit {
  _games: Game[] = [];
  _newGame: Game[] = [];

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

       this._newGame = this._games.filter((n) => n.categories.includes("new"));
     });
   });

  }


}
