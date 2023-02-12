import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { Item } from '../components/main-container/cards/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[] = [
    { title: 'N26', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2022/08/N26-Logo.svg', isProporsal: true },
    { title: 'COM', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2018/06/comdirect-logo-1.svg', isProporsal: false },
    { title: 'DKB', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2018/05/dkb-logo.svg', isProporsal: false },
    { title: 'REVOLUT', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2022/11/Revolut_Logo_200x100_mittig.svg', isProporsal: false },
    { title: 'ING', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2018/06/ing-logo-1.svg', isProporsal: false },
    { title: 'CONSORS', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2021/12/consorsbank.svg', isProporsal: false },
    { title: 'COMMER', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2020/05/commerzbank-logo.svg', isProporsal: false },
    { title: 'NORIS', imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2018/06/noris-logo.svg', isProporsal: false },
  ]

  data = new BehaviorSubject<Item[]>(this.items);

  constructor() { }

  getData() {
    return of(this.items)
  }
}
