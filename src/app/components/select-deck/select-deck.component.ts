import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-select-deck',
  templateUrl: './select-deck.component.html',
  styleUrls: ['./select-deck.component.scss']
})
export class SelectDeckComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}
  selectAllBtnLabel = 'Select all decks';
  allSelected = false;

  timeToTest: string;
  errorMesg: string;
  selectedDecks = [];
  decks: any;

  ngOnInit() {
    this.timeToTest = '1';
    this.decks = this.dataService.getDecks();
  }

  selectDeck($event, deck) {
    if (this.selectedDecks.indexOf(deck) > -1) {
      this.selectedDecks.splice(this.selectedDecks.indexOf(deck), 1);
      deck.selected = false;
    } else {
      this.selectedDecks.push(deck);
      deck.selected = true;
    }
  }

  selectAll() {
    if (this.allSelected) {
      this.selectedDecks.splice(0, this.selectedDecks.length);
      this.decks.forEach(d => (d.selected = false));
    } else {
      for (let deck of this.decks) {
        if (this.selectedDecks.indexOf(deck) < 0) this.selectedDecks.push(deck);
        deck.selected = true;
      }
    }

    this.allSelected = !this.allSelected;
    this.selectAllBtnLabel = this.allSelected ? 'Deselect all decks' : 'Select all decks';
  }

  startTest() {
    if (this.selectedDecks.length == 0) {
      this.errorMesg = 'Não foi selecionado nenhum deck para teste';
      return;
    }
    if (this.timeToTest == undefined) {
      this.timeToTest = '0';
    }

    var decksToTest = '';
    this.selectedDecks.forEach(element => {
      decksToTest += ',' + element.id;
    });
    decksToTest = decksToTest.substr(1);
    this.router.navigate(['testing', this.timeToTest, decksToTest]);
  }
}
