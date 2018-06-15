import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
    transform(array, orderBy) {
        if (!orderBy || orderBy.trim() === '') {
          return array;
        }
        // ascending
        if (orderBy === 'upPrice') {
          return Array.from(array).sort((item1: any, item2: any) => {
            return this.orderByComparator(item1.price, item2.price);
          });
        } else {
        // descending
          return Array.from(array).sort((item1: any, item2: any) => {
            return this.orderByComparator(item2.price, item1.price);
          });
        }
    }

    orderByComparator(a: any, b: any): number {
      if (a == null) {
        a = 0;
      }

      if ( b == null) {
        b = 0;
      }

      if (a < b) {
            return -1;
            }
      if (a > b) {
              return 1;
            }
        return 0;
    }
}
