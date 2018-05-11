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
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
    AppRouteModule
  ],
  providers: [InitService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
