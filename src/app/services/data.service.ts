import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DeckModel } from 'src/app/models/deck.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  getDecks() {
    return this.db.list<DeckModel>('decks').valueChanges();
    /*const decks = <DeckModel[]>(<any>data).decks;
    decks.forEach(d => (d.selected = false));
    return decks;*/
  }
}
