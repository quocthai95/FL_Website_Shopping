import { HomeComponent } from './shop/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CategoryComponent } from './shop/category/category.component';
import { ProductDetailComponent } from './shop/category/product-detail/product-detail.component';
import { GeneralComponent } from './shop/category/general/general.component';
import { CartComponent } from './shop/cart/cart.component';
// import { ProductDetailResolve } from './shared/productDetail.resolve';

const appRoutes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent, children: [
        {path: 'general', component: GeneralComponent},
        {path: ':id', component: ProductDetailComponent}
    ]},
    {path: 'cart', component: CartComponent},
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
