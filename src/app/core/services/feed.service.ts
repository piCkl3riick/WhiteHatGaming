import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Game, Jackpot } from 'src/app/shared/game.model';


@Injectable({
  providedIn: "root",
})
export class FeedService {

  private readonly newGamesUrl =
    "http://stage.whgstage.com/front-end-test/games.php";

    private readonly jackpotUrl = 'https://stage.whgstage.com/front-end-test/jackpots.php';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.newGamesUrl);
  }

  getFeedJackpot(): Observable<Jackpot[]>  {
    return this.http.get<Jackpot[]>(this.jackpotUrl)
  }

  // getGame(): Observable<IGamesCont[]> {
  //   return this.http.get<IGamesCont[]>(this.newGamesUrl).pipe(
  //     map((feeds) => {
  //       const customerOrders = feeds.filter(
  //         (feed: IGamesCont) => feed.categories === "new"
  //       );
  //       return customerOrders;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // // Error Handling
  // private handleError(error: any) {
  //   console.log("server error:", error);
  //   if (error.error instanceof Error) {
  //     const errMessage = error.error.message;
  //     return Observable.throw(errMessage);
  //   }
  //   return Observable.throw(error || "Server error");
  // }
}

