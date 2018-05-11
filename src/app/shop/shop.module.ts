import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { GeneralComponent } from './category/general/general.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductDetailResolve } from '../shared/productDetail.resolve';

@NgModule({
    declarations: [
        HomeComponent,
        CategoryComponent,
        ProductDetailComponent,
        GeneralComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        OwlModule
    ],
    exports: [
        HomeComponent,
        CategoryComponent,
        ProductDetailComponent,
        GeneralComponent,
        CartComponent
    ],
    providers: [
        ProductDetailResolve
    ]
})

export class ShopModule {

}
