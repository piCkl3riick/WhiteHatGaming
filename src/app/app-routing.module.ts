import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { OtherComponent } from './other/other.component';
import { PokerComponent } from './poker/poker.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SlotsComponent } from './slots/slots.component';
import { TableComponent } from './table/table.component';
import { TopGamesComponent } from './top-games/top-games.component';


const routes: Routes = [
  {
    path: '',
    component: NewGamesComponent
  },
  {
    path: 'top-games',
    component: TopGamesComponent
  },
  {
    path: 'new-games',
    component: NewGamesComponent
  },
  {
    path: 'slots',
    component: SlotsComponent
  },
  {
    path: 'jackpots',
    component: JackpotsComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'blackjack',
    component: BlackjackComponent
  },
  {
    path: 'roulette',
    component: RouletteComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'poker',
    component: PokerComponent
  },
  {
    path: 'other',
    component: OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
