import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchType: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchText) {
        return items;
    }
  searchText = searchText.toLowerCase();
  if (searchType === 'NAME') {
    return items.filter( item => {
      return item.productName.toLowerCase().includes(searchText);
    });
   } else if (searchType === 'CATEGORY') {
    return items.filter( item => {
      return item.productId.toLowerCase().includes(searchText);
    });
  }  else if (searchType === 'ORDERID') {
    return items.filter( item => {
      return item._id.toLowerCase().includes(searchText);
    });
  } else if (searchType === 'DATE') {
    return items.filter( item => {
      return item.guestInfor.other[1].toLowerCase().includes(searchText);
    });
  } else if (searchType === 'STATUS') {
    return items.filter( item => {
      return item.status.toLowerCase().includes(searchText);
    });
  }
  }
}
