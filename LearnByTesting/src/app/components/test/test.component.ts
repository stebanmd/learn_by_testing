import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  currentCard: any;
  cards = [
    { kana: 'あ', romanji: 'a' },
    { kana: 'え', romanji: 'e' },
    { kana: 'い', romanji: 'i' },
    { kana: 'お', romanji: 'o' },
    { kana: 'う', romanji: 'u' },
    { kana: 'か', romanji: 'ka' },
    { kana: 'き', romanji: 'ki' },
    { kana: 'く', romanji: 'ku' },
    { kana: 'け', romanji: 'ke' },
    { kana: 'こ', romanji: 'ko' }
  ];

  answerGiven: Answer[] = [
    // { typed: 'a', correctAnswer: 'a', kana: 'あ', isCorrect: true },
    // { typed: 'a', correctAnswer: 'ka', kana: 'か', isCorrect: false },
    // { typed: 'u', correctAnswer: 'u', kana: 'う', isCorrect: true },
  ];
  myAnswer: string = '';

  ngOnInit() {
    this.setNewCard();

    this.$counter = interval(1000).subscribe(x => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      return x;
    });
  }

  public future: Date = new Date(2018, 6, 29);
  public futureString: string;
  public diff: number = 0;
  public $counter: any;

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
