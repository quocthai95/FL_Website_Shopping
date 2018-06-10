import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import { InitService, DOMAINAPI } from '../../../shared/init.service';
import { Image, PlainGalleryConfig, PlainGalleryStrategy, LineLayout } from 'angular-modal-gallery';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../../../shared/product.model';
import * as ProductActions from '../../../store/product.action';
import { HttpClient } from '@angular/common/http';

declare const $: any;
@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Observable<fromProductReducer.State>;
  searchProducts: Observable<fromProductReducer.State>;
  constructor(private store: Store<fromAppReducer.AppState>, private inItService: InitService, private httpClient: HttpClient) { }
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '40px', height: '40px' }, { length: 5, wrap: true }, 'flex-start')
  };
  currentPage = 1;
  itemsPerPage = 8;
  searchType = 'NAME';
  searchText = '';

  newProduct: ProductModel = {
    _id: null,
    productId: null,
    productName: null,
    category: '',
    price: null,
    discount: null,
    image: [],
    description: [],
    sale: false,
    new: false,
    hot: false,
    amount: null
  };

  editProductModel: ProductModel = {
    _id: null,
    productId: null,
    productName: null,
    category: null,
    price: null,
    discount: null,
    image: [],
    description: [],
    sale: null,
    new: null,
    hot: null,
    amount: null
  };

  ngOnInit() {
    this.products = this.store.select('product');
  }

  searchProduct() {
    if (this.searchType === 'NAME') {
      this.httpClient.get(DOMAINAPI + 'product/search/' + this.searchText, {
        observe: 'body'
      }).subscribe(
        (response: any) => {
          this.searchProducts = response;
        }
      )
    }
  }

  createImgView(item) {
    const imgArr: Image[] = [];
    item.forEach((imgPath, index) => {
      imgArr.push(new Image(
        index,
        {
          img:  imgPath
        }
      ));
    });
    return imgArr;
  }

  checkProductId(id) {
    this.httpClient.get(DOMAINAPI + 'product/' + id, {
      observe: 'body'
    }).subscribe(
      (response: any) => {
        if (response === null) {
          this.createNewProduct();
        } else {
          alert('Mã sản phẩm đã tồn tại! Vui lòng nhập mã sản phẩm khác');
        }
      }
    );
  }

  createNewProduct() {
    this.store.dispatch(new ProductActions.CreateNewProduct(this.newProduct));
    this.clearForm('newImages', this.newProduct, '#createNew');
  }

  clearForm(id, isNew, idmodal) {
    if (isNew) {
      this.newProduct = {
        _id: null,
        productId: null,
        productName: null,
        category: '',
        price: null,
        discount: null,
        image: [],
        description: [],
        sale: false,
        new: false,
        hot: false,
        amount: null
      };
    } else {
      this.editProductModel = {
        _id: null,
        productId: null,
        productName: null,
        category: '',
        price: null,
        discount: null,
        image: [],
        description: [],
        sale: false,
        new: false,
        hot: false,
        amount: null
      };
    }
    (<HTMLInputElement>document.getElementById(id)).value = '';
    $(idmodal).modal('hide');
  }

  validForm(item) {
    if (item.category && item.productId && item.productName && item.price
      && (item.image.length > 0) && (item.description[0] && item.description[1]) ) {
      return false;
    } else {
      return true;
    }
  }

  editProduct() {
    this.store.dispatch(new ProductActions.UpdateProduct(this.editProductModel));
    this.clearForm('editImages', this.editProductModel, '#editProduct');
  }

  deleteProduct(id) {
    this.store.dispatch(new ProductActions.DeleteProduct(id));
  }

  returnEditProduct(item) {
    this.editProductModel = Object.assign(this.editProductModel, item);
  }

  async encodeImg(id, item) {
    item.image = [];
    const imgArr = (<HTMLInputElement>document.getElementById(id)).files;
    for (let i = 0; i < imgArr.length; i++) {
      const base64 = await this.imgToBase64(imgArr[i]);
      item.image.push(base64);
    }
  }

  imgToBase64(img) {
    const reader = new FileReader();
    return new Promise(
      (resolve, reject) => {
        reader.readAsDataURL(img);
        reader.onloadend = function() {
          resolve(reader.result);
        };

        reader.onerror = function() {
          reader.abort();
          reject('Failed to read Image');
        };
      }
    );
  }

}
