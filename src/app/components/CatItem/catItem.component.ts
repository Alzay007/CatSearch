import { Component, Input } from '@angular/core';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './catItem.component.html',
  styleUrls: ['./catItem.component.scss']
})

export class CatItemComponent {
  @Input() cat: Cat;
}
