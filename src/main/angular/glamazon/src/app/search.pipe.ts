import { Pipe, PipeTransform } from '@angular/core';
import { Goods } from './goods';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Goods[], searchTerm: string): Goods[] {
    return value.filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.category.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
