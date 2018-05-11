import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ProductDetailResolve implements Resolve<ProductModel> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> | Promise<ProductModel> | ProductModel {
        return this.productService.getProductId(+route.params['id']);
    }
}