import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { InitService } from '../../shared/init.service';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../shared/product.model';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Observable<{products: ProductModel[]}>;

  constructor(private initService: InitService, private productService: ProductService,
  private store: Store<{product: {products: ProductModel[]}}>) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.products = this.productService.getProducts();

  }

}
