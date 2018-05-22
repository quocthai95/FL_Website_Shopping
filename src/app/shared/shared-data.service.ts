import { Subject } from 'rxjs/Subject';

export class SharedDataService {
    totalPriceObs = new Subject();
    cartItemsObs = new Subject();
}
