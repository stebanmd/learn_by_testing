import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-decks',
  templateUrl: './view-decks.component.html',
  styleUrls: ['./view-decks.component.scss']
})
export class ViewDecksComponent implements OnInit {
  constructor(private dataService: DataService) {}

  decks: Observable<any[]>;
  ngOnInit() {
    this.decks = this.dataService.getDecks();
  }

  backToTop(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
