import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { InitService, DOMAINAPI } from '../../shared/init.service';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../shared/product.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromAppReducer from '../../store/app.reducer';
import * as fromProductReducer from '../../store/product.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotProduct: Observable<Array<ProductModel>>;
  saleProduct: Observable<Array<ProductModel>>;
  newProduct: Observable<Array<ProductModel>>;
  constructor(private initService: InitService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.initService.setupStuff();
    // this.httpClient.get(DOMAINAPI + 'home', {
    //   observe: 'body'
    // }).subscribe()
  }

}
