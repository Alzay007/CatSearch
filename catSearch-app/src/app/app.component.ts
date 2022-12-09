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
  cats: Cat[] = [];

  constructor(private CatApiService: CatApiService) {
  }

  ngOnInit(): void {
    this.CatApiService.getAllCats().subscribe((cats) => {
      this.cats = cats
    })
  }
}
