import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitService } from '../../shared/init.service';
import { Observable } from 'rxjs/Observable';
import * as fromProductReducer from '../../store/product.reducer';
import * as fromAppReducer from '../../store/app.reducer';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  listProduct: Observable<fromProductReducer.State>;
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private store: Store<fromAppReducer.AppState>, private initService: InitService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (query: Params) => {
        console.log(query);
        this.listProduct = this.store.select('product');
      }
    );
  }
}
