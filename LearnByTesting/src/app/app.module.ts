import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDeckComponent } from './select-deck/select-deck.component';
import { RegisterDeckComponent } from './register-deck/register-deck.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDeckComponent,
    RegisterDeckComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
