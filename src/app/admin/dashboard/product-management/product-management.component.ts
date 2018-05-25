import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import { InitService } from '../../../shared/init.service';
import { Image, PlainGalleryConfig, PlainGalleryStrategy, LineLayout } from 'angular-modal-gallery';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../../../shared/product.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Observable<fromProductReducer.State>;
  constructor(private store: Store<fromAppReducer.AppState>, private inItService: InitService) { }
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '40px', height: '40px' }, { length: 5, wrap: true }, 'flex-start')
  };
  @ViewChild('f') createForm: NgForm;
  @ViewChild('ef') editForm: NgForm;

  newProduct = {
    name: null,
    price: null,
    oldPrice: null,
    sale: false,
    gift: false,
    new: false,
    img: []
  };

  editProductModel: ProductModel = {
    _id: null,
    name: null,
    price: null,
    oldPrice: null,
    new: null,
    sale: null,
    gift: null,
    img: [],
    quantity: null
  }

  ngOnInit() {
    this.products = this.store.select('product');
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

  createNewProduct(f) {
    console.log(this.createForm);
    console.log(this.newProduct);
  }

  editProduct() {
    console.log(this.editForm);
  }

  returnEditProduct(item) {
    this.editProductModel = item;
  }

  async encodeImg() {
    this.newProduct.img = [];
    const imgArr = (<HTMLInputElement>document.getElementById('newImages')).files;
    for (let i = 0; i < imgArr.length; i++) {
      const base64 = await this.imgToBase64(imgArr[i]);
      this.newProduct.img.push(base64);
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
          reject(new DOMException('Failed to read Image'));
        }
      }
    );
  }

  alert(c) {
  console.log(c);
  }

}
