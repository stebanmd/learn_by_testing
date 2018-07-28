import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-deck',
  templateUrl: './select-deck.component.html',
  styleUrls: ['./select-deck.component.scss']
})
export class SelectDeckComponent implements OnInit {

  constructor(private router: Router) { }

  timeToTest: string;
  errorMesg: string;

  decks = [
    {name: "Hiragana A Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana K Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana S Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana T Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana N Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana H Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana Y Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana R Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana G Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana Z Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana D Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana B Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana P Column", id: "05qj0h5ag", selected: false },
    {name: "Hiragana KY Column", id: "05qj0h5ag", selected: false },

    {name: "Katakana A Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana K Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana S Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana T Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana N Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana H Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana Y Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana R Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana G Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana Z Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana D Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana B Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana P Column", id: "05qj0h5ag", selected: false },
    {name: "Katakana KY Column", id: "05qj0h5ag", selected: false },
  ];

  selectedDecks = [];

  ngOnInit() {
    this.timeToTest = '00:00';
  }

  selectDeck($event, deck) {
    if (this.selectedDecks.indexOf(deck) > -1) {
      this.selectedDecks.splice(this.selectedDecks.indexOf(deck), 1);
      deck.selected = false;
    }
    else {
      this.selectedDecks.push(deck);
      deck.selected = true;
    }    
  }

  selectAll() {
    for(let deck of this.decks) { 
      if (this.selectedDecks.indexOf(deck) < 0)
        this.selectedDecks.push(deck);
      deck.selected = true;
    }
  }

  startTest() {
    if (this.selectedDecks.length == 0) {
      this.errorMesg = "Não foi selecionado nenhum deck para teste";
      return;
    }
    if (this.timeToTest == undefined) {
      this.timeToTest = "0000";
    }
    this.timeToTest = this.timeToTest.replace(':', '');

    var decksToTest = "";
    this.selectedDecks.forEach(element => {
      decksToTest += ',' + element.id      
    });
    decksToTest = decksToTest.substr(1);
    this.router.navigate(['testing', this.timeToTest, decksToTest]);    
  }

}
