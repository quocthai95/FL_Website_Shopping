import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.css']
})
export class CompletedOrderComponent implements OnInit {
  nameCustomer = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nameCustomer = this.route.snapshot.queryParams['nameCustomer'];
  }

}
