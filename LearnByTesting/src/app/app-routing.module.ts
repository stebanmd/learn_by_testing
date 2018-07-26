import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDeckComponent } from './components/register-deck/register-deck.component';
import { HomeComponent } from './components/home/home.component';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterDeckComponent
  },
  {
    path: 'choose',
    component: SelectDeckComponent
  },
  {
    path: 'testing/:decks',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
