import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDecksComponent } from 'src/app/components/view-decks/view-decks.component';

import { HomeComponent } from './components/home/home.component';
import { RegisterCardsComponent } from './components/register-cards/register-cards.component';
import { RegisterDeckComponent } from './components/register-deck/register-deck.component';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'decks',
    component: RegisterDeckComponent
  },
  {
    path: 'cards/:deck',
    component: RegisterCardsComponent
  },
  {
    path: 'choose',
    component: SelectDeckComponent
  },
  {
    path: 'testing/:time/:decks',
    component: TestComponent
  },
  {
    path: 'check',
    component: ViewDecksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
