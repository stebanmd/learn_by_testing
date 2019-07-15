import { Injectable } from '@angular/core';
import { DeckModel } from 'src/app/models/deck.js';

import * as data from '../decks_data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getDecks(): any {
    const decks = <DeckModel[]>(<any>data).decks;
    decks.forEach(d => (d.selected = false));
    return decks;
  }
}
