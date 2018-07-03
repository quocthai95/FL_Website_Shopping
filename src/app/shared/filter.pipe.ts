import { Pipe, PipeTransform } from '@angular/core';
import { InitService } from './init.service';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor(private initService: InitService) {}

  transform(items: any[], searchText: string, searchType: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchText) {
        return items.filter(item => item).reverse();
    }
  searchText = searchText.toLowerCase();
  if (searchType === 'NAME') {
    return items.filter( item => {
      return item.productNameTemp.toLowerCase().includes(this.initService.change_Unicode(searchText));
    }).reverse();
   } else if (searchType === 'CATEGORY') {
    return items.filter( item => {
      return item.productId.toLowerCase().includes(searchText);
    }).reverse();
  }  else if (searchType === 'ORDERID') {
    return items.filter( item => {
      return item._id.toLowerCase().includes(searchText);
    }).reverse();
  } else if (searchType === 'DATE') {
    return items.filter( item => {
      return item.guestInfor.other[1].toLowerCase().includes(searchText);
    }).reverse();
  } else if (searchType === 'STATUS') {
    return items.filter( item => {
      return item.status.toLowerCase().includes(searchText);
    }).reverse();
  }
  }
}
