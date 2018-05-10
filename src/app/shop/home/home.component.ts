import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { InitService } from '../../shared/init.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = {
    'hot': []
  };

  constructor(private initService: InitService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.httpClient.get('assets/products.json', {
      observe: 'body'
    }).subscribe(
      (data: any) => {
        this.products = data;
      }
    );
  }

}
