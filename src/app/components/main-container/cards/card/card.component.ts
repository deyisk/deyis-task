import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() item: Item | null = null;

  showMenu = false;
  shownedTableIndex = 0;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

export class Item {
  title: string | null = null;
  imageUrl: string | null = null
  isProporsal: boolean | null = null
}
