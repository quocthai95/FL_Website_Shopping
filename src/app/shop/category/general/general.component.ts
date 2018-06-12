import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../../../shared/product.model';
import { InitService, DOMAINAPI, showLoadingScreen, hideLoadingScreen } from '../../../shared/init.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  sortType = '';
  listProduct: ProductModel[] = [];
  isNew: any;
  productCategory: string;
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private initService: InitService, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        showLoadingScreen();
        this.sortType = '';
        this.productCategory = params['category'];
        this.isNew = (params['isNew'] === 'new') ? true : false;
        const data = {
          category: this.productCategory,
          new: this.isNew
        };
        this.httpClient.post(DOMAINAPI + 'product/category', data, {
          observe: 'body'
        }).subscribe(
          (response: any) => {
            if (response.length > 0) {
              this.listProduct = response;
              hideLoadingScreen();
            } else {
              hideLoadingScreen();
              this.router.navigate(['not-found']);
            }
          }
        );
      }
    );
  }

}
