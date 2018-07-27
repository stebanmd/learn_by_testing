import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck, DeckModel } from '../../models/deck';

@Component({
  selector: 'app-register-deck',
  templateUrl: './register-deck.component.html',
  styleUrls: ['./register-deck.component.scss']
})
export class RegisterDeckComponent implements OnInit {

  constructor(private router: Router) { }

  decks = [
    {name: "Hiragana A Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana K Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana S Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana T Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana N Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana H Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana Y Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana R Column", id: "05qj0h5ag", selected: false },
  ];

  deck: DeckModel;
  inEditMode = false;

  ngOnInit() {
    this.deck = new DeckModel();
  }

  selectDeck(deck) {
    this.cancel();
    this.deck = deck;
    this.deck.selected = true;
    this.inEditMode = true;
  }

  cancel() {
    if (this.deck != undefined) {
      this.deck.selected = false;
      this.inEditMode = false;
      this.deck = new DeckModel();
    }
  }

  add() {

  }

  saveChanges() {

  }

  remove() {

  }

  editCards() {

  }

}
