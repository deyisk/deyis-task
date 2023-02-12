import { Component } from '@angular/core';

@Component({
  selector: 'teaserboxs',
  templateUrl: './teaserboxs.component.html',
  styleUrls: ['./teaserboxs.component.css']
})
export class TeaserboxsComponent {
  boxesInfo: BoxeInfo[] = [
    {
      imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2022/08/N26-Logo.svg',
      point: '1,1',
      title1:'Empfehlung:Bestes kostenloses Konto',
      title2:'Top mobiles Konto',
      titles:[
        "Bedingungslos kostenlos",
        "Weltweit gebührenfrei mit Karte zahlen",
        "Top Smartphone-Konto"
      ]
    },
    {
      imageUrl: 'https://finanzvergleich.com/wp-content/uploads/2018/06/comdirect-logo-1.svg',
      point: '1,2',
      title1:'Tipp:Beste Direktbank',
      title2: null,
      titles:[
        "Bei aktiver Nutzung kostenlos",
        "Top Banking App",
        "Kostenlos einzahlen & abheben an der Kasse"
      ]
    }
  ]
}

export class BoxeInfo {
  imageUrl: string | null = null
  title1: string | null = null
  title2: string | null = null
  point: string | null = null
  titles: string[] | null = null
}
