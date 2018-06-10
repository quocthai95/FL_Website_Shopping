import { Component, OnInit } from '@angular/core';
import { InitService } from '../../../shared/init.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class OrderManagementComponent implements OnInit {

  constructor(private inItService: InitService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
