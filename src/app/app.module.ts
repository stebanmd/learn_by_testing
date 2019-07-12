import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { RegisterDeckComponent } from './components/register-deck/register-deck.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { RegisterCardsComponent } from './components/register-cards/register-cards.component';
import { ResultComponent } from './components/result/result.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectDeckComponent,
    RegisterDeckComponent,
    TestComponent,
    HomeComponent,
    RegisterCardsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
