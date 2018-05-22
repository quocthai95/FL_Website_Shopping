import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { GeneralComponent } from './category/general/general.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CheckoutAddressComponent } from './cart/checkout-address/checkout-address.component';
import { CheckoutOrderComponent } from './cart/checkout-order/checkout-order.component';
import { CheckoutOrderReviewComponent } from './cart/checkout-order-review/checkout-order-review.component';


@NgModule({
    declarations: [
        HomeComponent,
        CategoryComponent,
        ProductDetailComponent,
        GeneralComponent,
        CartComponent,
        AboutComponent,
        CheckoutAddressComponent,
        CheckoutOrderComponent,
        CheckoutOrderReviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        OwlModule,
        NgxPaginationModule,
        ConfirmationPopoverModule.forRoot()
    ],
    exports: [
        HomeComponent,
        CategoryComponent,
        ProductDetailComponent,
        GeneralComponent,
        CartComponent,
        AboutComponent
    ],
    providers: [
    ]
})

export class ShopModule {

}
