import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../cards/card/card.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  form: FormGroup = new FormGroup({
    filter1: new FormControl('1'),
    filter2: new FormControl('1'),
    filter3: new FormControl('1'),
  })

  constructor(private dataService: DataService) {
    this.form.valueChanges.subscribe(value => {
      if (value.filter1 == 1 && value.filter2 == 1 && value.filter3 == 1) {
        this.dataService.getData().subscribe((res:Item[]) => {
          this.dataService.data.next(res);
        })
      }
      if (value.filter1 == 2) {
        this.dataService.getData().subscribe((res:Item[]) => {
          this.dataService.data.next(res.filter(i => i.title == "DKB" || i.title == "N26" || i.title == "COM"))
        })
      }
      if (value.filter1 == 2 && value.filter2 == 3) {
        this.dataService.getData().subscribe((res:Item[]) => {
          this.dataService.data.next(res.filter(i => i.title == "N26" || i.title == "COM" || i.title == "DKB" || i.title == "REVOLUT"))
        })
      }
    })
  }
}
