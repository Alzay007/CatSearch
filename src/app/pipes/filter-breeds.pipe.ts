import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../models/cat';

@Pipe({
  name: 'filterBreeds'
})
export class FilterBreedsPipe implements PipeTransform {

  transform(catList: Cat[], search: string): Cat[] {
    if (search.length === 0) return catList
    return catList.filter(cat => cat.breeds[0].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }
}
