import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardModel } from '../../models/card';

@Component({
  selector: 'app-register-cards',
  templateUrl: './register-cards.component.html',
  styleUrls: ['./register-cards.component.scss']
})
export class RegisterCardsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  cards: CardModel[] = [];
  currentCard: CardModel;
  inEditMode: boolean = false;
  buttonLabel: string = 'Add';
  deckName: string = '';
  deckId: string = '';

  ngOnInit() {
    this.resetForm();
    this.route.params.subscribe(res => {
      this.deckId = res.deck
      this.deckName = 'Hiragana A Column'
    });
  }

  selectCard(card) {
    this.inEditMode = true;
    this.currentCard = card;
    this.buttonLabel = "Save";
  }

  save($event): void {
    $event.preventDefault();
    if (this.currentCard.id) {
      this.update();
    } else {
      this.add();
    }
    this.resetForm();
  }

  remove() {
    if (this.currentCard.id) {
      if (confirm("Do you want to remove this card?")) {
        this.cards.splice(this.cards.indexOf(this.currentCard), 1);
        this.resetForm();
      }
    }
  }

  private resetForm(): void {
    this.inEditMode = false;
    this.buttonLabel = "Add";
    this.currentCard = new CardModel();
  }

  private update(): void {

  }

  private add(): void {
    if (this.currentCard.kana.length > 0 && this.currentCard.romanji.length > 0) {
      this.currentCard.deckId = this.deckId;
      this.currentCard.id = (Math.random() * 40293930).toString();
      this.cards.unshift(this.currentCard);
      this.resetForm();
    }
  }

}
