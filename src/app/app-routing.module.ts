import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDeckComponent } from './components/register-deck/register-deck.component';
import { HomeComponent } from './components/home/home.component';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { TestComponent } from './components/test/test.component';
import { RegisterCardsComponent } from './components/register-cards/register-cards.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'decks', component: RegisterDeckComponent
  },
  {
    path: 'cards/:deck', component: RegisterCardsComponent
  },
  {
    path: 'choose', component: SelectDeckComponent
  },
  {
    path: 'testing/:time/:decks', component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
