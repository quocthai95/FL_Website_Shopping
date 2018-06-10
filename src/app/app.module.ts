import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './shop/home/home.component';
import { ShopModule } from './shop/shop.module';
import { AppRouteModule } from './app-route.module';
import { InitService } from './shared/init.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './store/product.effect';
import { ScrollTopComponent } from './others/scroll-top/scroll-top.component';
import { SharedDataService } from './shared/shared-data.service';
import { AdminModule } from './admin/admin.module';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShopModule,
    AdminModule,
    AppRouteModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([ProductEffect]),
    ModalGalleryModule.forRoot()
  ],
  providers: [InitService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
