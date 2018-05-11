import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { InitService } from '../../../shared/init.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;

  constructor(private route: ActivatedRoute, private initService: InitService) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.product = this.route.snapshot.data['productDetail'];
  }

}
