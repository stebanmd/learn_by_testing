import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDeckComponent } from './register-deck/register-deck.component';
import { HomeComponent } from './home/home.component';
import { SelectDeckComponent } from './select-deck/select-deck.component';
import { TestComponent } from './test/test.component';

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
