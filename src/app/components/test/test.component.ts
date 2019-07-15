import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Card } from 'src/app/models/card';
import { DeckModel } from 'src/app/models/deck';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  minutes = '';
  seconds = '';
  hasTimer = true;
  isFinished = false;

  currentCard: any;
  cards: Card[] = [];

  answerGiven: Answer[] = [];
  myAnswer: string = '';

  ngOnInit() {
    this.route.params.subscribe(p => {
      var timeExtimate = p.time;

      if (timeExtimate !== '0') {
        var until = new Date().getTime();
        until += timeExtimate * 60 * 1000;

        this.$counter = interval(1000).subscribe(x => {
          var now = new Date().getTime();
          var distance = until - now;

          this.minutes = '' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = '' + Math.floor((distance % (1000 * 60)) / 1000);

          if (this.minutes === '0' && this.seconds === '0') {
            this.finishTest();
          }
          return x;
        });
      } else {
        this.hasTimer = false;
      }

      const filter = p.decks.split(',');
      const decks = this.dataService.getDecks();

      const selectedDecks = decks.filter(a => filter.indexOf(a.id) >= 0);
      selectedDecks.forEach((d: DeckModel) => {
        this.cards.push(...d.cards);
      });

      this.setNewCard();
    });
  }

  public $counter: any = undefined;

  answer($event): void {
    $event.preventDefault();
    if (this.myAnswer === '') return;

    let newAns: Answer = {
      typed: this.myAnswer,
      correctAnswer: this.currentCard.romanji,
      kana: this.currentCard.kanji ? this.currentCard.kanji : this.currentCard.kana,
      isCorrect: false
    };

    if (this.currentCard.romanji.toLowerCase() === this.myAnswer.toLowerCase()) {
      newAns.isCorrect = true;
    }

    this.answerGiven.unshift(newAns);
    this.setNewCard();
  }

  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  finishMessageTitle: string = '';
  finishTest(): void {
    if (this.$counter) {
      this.$counter = undefined;
    }

    if (this.answerGiven) {
      this.correctAnswer = this.answerGiven.filter(a => a.isCorrect).length;
      this.incorrectAnswer = this.answerGiven.filter(a => !a.isCorrect).length;
    }

    this.finishMessageTitle = 'Congratulations';
    if (this.incorrectAnswer > this.correctAnswer) {
      this.finishMessageTitle = 'Better luck next time';
    }

    this.hasTimer = false;
    this.isFinished = true;
  }

  setNewCard(): void {
    let nextIndex = Math.floor(Math.random() * this.cards.length);
    while (nextIndex === this.cards.indexOf(this.currentCard)) nextIndex = Math.floor(Math.random() * this.cards.length);
    this.currentCard = this.cards[nextIndex];
    this.myAnswer = '';
  }
}

interface Answer {
  isCorrect: boolean;
  typed: string;
  correctAnswer: string;
  kana: string;
}
