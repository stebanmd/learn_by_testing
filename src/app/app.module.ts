import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterCardsComponent } from './components/register-cards/register-cards.component';
import { RegisterDeckComponent } from './components/register-deck/register-deck.component';
import { ResultComponent } from './components/result/result.component';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { TestComponent } from './components/test/test.component';
import { ViewDecksComponent } from './components/view-decks/view-decks.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectDeckComponent,
    RegisterDeckComponent,
    TestComponent,
    HomeComponent,
    RegisterCardsComponent,
    ResultComponent,
    ViewDecksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
