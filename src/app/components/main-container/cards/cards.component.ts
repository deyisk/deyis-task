import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from './card/card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.dataService.data.subscribe((res: Item[]) => {
      this.items = res;
    })
  }
}
