import { Component } from '@angular/core';
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
  openModalWindow = false;

  catList: Cat[] = [];
  breedsList: any[] = [];

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
    return this.openModalWindow = !this.openModalWindow;
  }

  getBreed(id: string) {
    console.log('done')
    console.log(id)
    this.CatApiService.getBreedByID(id).subscribe((catList) => {
      this.catList = catList
    }
    )
  }

  ngOnInit(): void {
    this.getNewCats(this.initialNumber)
    this.CatApiService.getAllBreeds().subscribe((breedsList) => {
      this.breedsList = breedsList
    });
  }
}
