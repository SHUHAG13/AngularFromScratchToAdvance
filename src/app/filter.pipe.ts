import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:any[],searchText:string): any[]{
    // Check if items and searchText are defined
    if (!items || !searchText) {
      return items;
    }
    // Convert searchText to lowercase for case-insensitive comparison
    return items.filter((item) => 
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
