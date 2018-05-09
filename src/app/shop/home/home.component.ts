import { Component, OnInit } from '@angular/core';
import { InitService } from '../../shared/init.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private initService: InitService) { }

  ngOnInit() {
    this.initService.setupStuff();
  }

}
