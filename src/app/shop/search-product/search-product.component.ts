import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitService, DOMAINAPI } from '../../shared/init.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from '../../shared/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  listProduct: ProductModel[] = [];
  currentPage = 1;
  itemsPerPage = 4;
  sortType = '';

  constructor(private httpClient: HttpClient, private initService: InitService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (query: Params) => {
        this.sortType = '';
        this.httpClient.get(DOMAINAPI + 'product/search/' + query['nameProduct'], {
          observe: 'body'
        }).subscribe(
          (response: any) => {
            if (response) {
              this.listProduct = response;
            } else {
              this.router.navigate(['not-found']);
            }
          }
        )
      }
    );
  }
}
