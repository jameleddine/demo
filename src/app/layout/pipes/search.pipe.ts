import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any[],item:any): any {
    return item?value.filter(val=>val.email.toUpperCase().indexOf(item.toUpperCase())!==-1):value;
  }

}
