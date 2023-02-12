import { Component, Input } from '@angular/core';
import { BoxeInfo } from '../teaserboxs.component';

@Component({
  selector: 'app-teaserbox',
  templateUrl: './teaserbox.component.html',
  styleUrls: ['./teaserbox.component.css']
})
export class TeaserboxComponent {
  @Input() item: BoxeInfo | null = null
}
