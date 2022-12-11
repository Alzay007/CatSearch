import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cat } from './models/cat';

import { CatApiService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catSearch-app';

  term = ''
  count: '';

  catList: Cat[] = [];
  currentSubscription = false;
  initialNumber = 10;

  constructor(private CatApiService: CatApiService) {
  }

  getNewCats(x: number) {
    this.currentSubscription = true;
    this.CatApiService.getAllCats(x).subscribe((catList) => {
      this.catList = catList;
      this.currentSubscription = false
    });
  }

  getCatsByCount(count: number) {
    if (+this.count > 0) {
      this.count = '';
      return this.getNewCats(count)
    }

    return;
  }

  showAll() {
    return this.getNewCats(100);
  }

  ngOnInit(): void {
    this.getNewCats(this.initialNumber)
  }
}
