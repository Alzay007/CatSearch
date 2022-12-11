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

  isRightCount = true;

  catList: Cat[] = [];
  breedList: any[] = [];

  currentSubscription = false;
  initialNumber = 10;

  breeds = this.breedList.map(breed => breed.breeds[0].name)

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
    if (+this.count > 0 && +this.count <= 100) {
      this.count = '';
      this.isRightCount = true;

      return this.getNewCats(count)
    }

    this.isRightCount = false;
    window.setTimeout(() => this.isRightCount = true, 2000)
    return;
  }

  showAll() {
    return this.getNewCats(100);
  }

  ngOnInit(): void {
    this.getNewCats(this.initialNumber)
  }
}
