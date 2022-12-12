import { Component } from '@angular/core';
import { Cat } from './models/cat';

import { catApiService } from './services/cat.service';

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
  isShowSelectList = false;

  catList: Cat[] = [];
  breedsList: any[] = [];

  isLoadningData = false;
  initialNumber = 10;

  constructor(private catApiService: catApiService) {
  }

  getNewCats(x: number) {
    this.isLoadningData = true;
    this.catApiService.getAllCats(x).subscribe((catList) => {
      this.catList = catList;
      this.isLoadningData = false
    });
  }

  getCatsByCount(count: number) {
    if (+this.count > 0 && +this.count <= 100) {
      this.count = '';
      this.isRightCount = true;

      return this.getNewCats(count)
    }

    this.isRightCount = false;
    window.setTimeout(() => this.isRightCount = true, 3000)
    return;
  }

  showAll() {
    return this.isShowSelectList = !this.isShowSelectList;
  }

  getBreed(id: string) {
    this.catApiService.getBreedByID(id).subscribe((catList) => {
      this.catList = catList
    })
  }

  ngOnInit(): void {
    this.getNewCats(this.initialNumber)
    this.catApiService.getAllBreeds().subscribe((breedsList) => {
      this.breedsList = breedsList
    });
  }
}
