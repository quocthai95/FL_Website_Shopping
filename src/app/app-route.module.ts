import { HomeComponent } from './shop/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CategoryComponent } from './shop/category/category.component';
import { ProductDetailComponent } from './shop/category/product-detail/product-detail.component';
import { GeneralComponent } from './shop/category/general/general.component';
import { CartComponent } from './shop/cart/cart.component';
import { AboutComponent } from './shop/about/about.component';
import { CheckoutOrderComponent } from './shop/cart/checkout-order/checkout-order.component';
import { CheckoutAddressComponent } from './shop/cart/checkout-address/checkout-address.component';
import { CheckoutOrderReviewComponent } from './shop/cart/checkout-order-review/checkout-order-review.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { ProductManagementComponent } from './admin/dashboard/product-management/product-management.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './admin/auth-guard.service';
import { SearchProductComponent } from './shop/search-product/search-product.component';

const appRoutes = [
    {path: '', redirectTo: 'shop', pathMatch: 'full'},
    {path: 'shop', component: ShopComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'category', component: CategoryComponent, children: [
            {path: 'general', component: GeneralComponent},
            {path: ':id', component: ProductDetailComponent}
        ]},
        {path: 'cart', component: CartComponent, children: [
            {path: '', redirectTo: 'checkout-order', pathMatch: 'full'},
            {path: 'checkout-order', component: CheckoutOrderComponent},
            {path: 'checkout-delivery', component: CheckoutAddressComponent},
            {path: 'checkout-review', component: CheckoutOrderReviewComponent}
        ]},
        {path: 'search', component: SearchProductComponent},
        {path: 'aboutus', component: AboutComponent}
    ]},
    {path: 'admin', children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'login', component: LoginComponent},
        {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
            {path: '', redirectTo: 'product-management', pathMatch: 'full'},
            {path: 'product-management', component: ProductManagementComponent}
        ]}
    ]},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule {
}
