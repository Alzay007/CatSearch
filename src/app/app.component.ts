import { Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cat } from './models/cat';
import { errorCorrectAction, errorIncorrectAction } from './reducers/error/error.actions';
import { errorState } from './reducers/error/error.reducer';
import { selectError } from './reducers/error/error.selector';
import { loadActiveAction, loadFinishAction } from './reducers/loader/loading.actions';
import { loadingState } from './reducers/loader/loading.reducer';
import { selectLoader } from './reducers/loader/loading.selector';

import { catApiService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('inputField') redel: ElementRef;

  public isLoadingData$: Observable<boolean> = this.loading$.pipe(select(selectLoader));
  public isCorrectCount$: Observable<boolean> = this.error$.pipe(select(selectError));

  term = '';
  count: number;
  isShowSelectList = false;

  catList: Cat[] = [];
  breedsList: any[] = [];

  constructor(
    private catApiService: catApiService,
    private loading$: Store<loadingState>,
    private error$: Store<errorState>) {
  }

  getNewCats(x: number) {
    this.loading$.dispatch(new loadActiveAction())
    this.catApiService.getAllCats(x).subscribe((catList) => {
      this.catList = catList;
      this.loading$.dispatch(new loadFinishAction())
    });
  }

  getCatsByCount(count: number) {
    if (this.count > 0 && this.count <= 100) {
      this.error$.dispatch(new errorCorrectAction())
      this.redel.nativeElement.value = ''

      return this.getNewCats(count)
    }

    this.error$.dispatch(new errorIncorrectAction())
    window.setTimeout(() => this.error$.dispatch(new errorCorrectAction()), 2500)
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
    this.getNewCats(10)
    this.catApiService.getAllBreeds().subscribe((breedsList) => {
      this.breedsList = breedsList
    });
  }
}
