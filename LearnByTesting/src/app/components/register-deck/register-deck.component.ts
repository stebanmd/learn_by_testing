import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeckModel } from '../../models/deck';

@Component({
  selector: 'app-register-deck',
  templateUrl: './register-deck.component.html',
  styleUrls: ['./register-deck.component.scss']
})
export class RegisterDeckComponent implements OnInit {

  constructor(private router: Router) { }

  decks = [
    {name: "Hiragana A Column", id: "a", selected: false },
    {name: "Hiragana K Column", id: "b", selected: false },
    {name: "Hiragana S Column", id: "c", selected: false },
    {name: "Hiragana T Column", id: "d", selected: false },
    {name: "Hiragana N Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana H Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana Y Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana R Column", id: "05qj0h5ag", selected: false },
  ];

  inEditMode: boolean = false;
  deck: DeckModel;
  buttonLabel = "Add";

  ngOnInit() {
    this.deck = new DeckModel();
  }

  selectDeck(deck) {
    this.cancel();
    this.deck = deck;
    this.deck.selected = true;
    this.inEditMode = true;
    this.buttonLabel = "Save";
  }

  cancel() {
    if (this.deck != undefined) {
      this.deck.selected = false;
      this.inEditMode = false;
      this.buttonLabel = "Add";
      this.deck = new DeckModel();
    }
  }

  saveChanges($event) {
    $event.preventDefault();
    if (!this.deck.id) {
      if (this.deck.name.length > 0) {
        this.deck.id = "adddddka0009s";
        this.decks.push(this.deck);
      }
    }

    console.log(Math.floor(Math.random() * 23019));
    
    this.cancel();
  }

  remove() {
    if (this.deck != undefined && this.deck.id != undefined) {
      if (confirm('Do you want to remove this deck with all its cards?')) {
        this.decks.splice(this.decks.indexOf(this.deck), 1);
        this.cancel();
      }
    }
  }

  editCards() {
    if (this.deck != undefined && this.deck.id != undefined) {
      this.router.navigate(['cards', this.deck.id])
    }
  }

}
