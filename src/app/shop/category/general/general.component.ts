import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import { InitService } from '../../../shared/init.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  listProduct: Observable<fromProductReducer.State>;
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private store: Store<fromAppReducer.AppState>, private initService: InitService) { }

  ngOnInit() {
    this.listProduct = this.store.select('product');
  }

}
