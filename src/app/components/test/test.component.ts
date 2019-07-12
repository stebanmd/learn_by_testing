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

  minutes = '';
  seconds = '';
  hasTimer = true;
  isFinished = false;

  currentCard: any;
  cards = [
    { kana: 'あ', romanji: 'a' },
    { kana: 'い', romanji: 'i' },
    { kana: 'う', romanji: 'u' },
    { kana: 'え', romanji: 'e' },
    { kana: 'お', romanji: 'o' },
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
    console.log(this.route);

    this.setNewCard();

    this.route.params.subscribe(p => {
      var timeExtimate = p.time;

      console.log(p, timeExtimate);

      if (timeExtimate !== 0) {
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

          console.log(x);
          return x;
        });
      } else {
        this.hasTimer = false;
      }
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

  finishTest(): void {
    if (this.$counter) {
      this.$counter = undefined;
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
