import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import { InitService } from '../../../shared/init.service';
import { Image, PlainGalleryConfig, PlainGalleryStrategy, LineLayout } from 'angular-modal-gallery';

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

}
