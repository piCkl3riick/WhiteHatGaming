import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { TableComponent } from './table/table.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FeedService } from './core/services/feed.service';
import { TopGamesComponent } from './top-games/top-games.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGamesComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent,
    HeaderComponent,
    TopGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
