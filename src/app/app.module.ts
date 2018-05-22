import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './shop/home/home.component';
import { CoreModule } from './core/core.module';
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



@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
    AppRouteModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([ProductEffect])
  ],
  providers: [InitService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
