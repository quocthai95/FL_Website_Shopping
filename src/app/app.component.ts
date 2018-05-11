import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isPopState = false;

  constructor(private router: Router, private localStra: LocationStrategy) {}

  ngOnInit() {
    this.localStra.onPopState(() => {
      this.isPopState = true;
    });

  this.router.events.subscribe((event) => {
    if ( event instanceof NavigationEnd && !this.isPopState) {
      window.scrollTo(0, 0);
      this.isPopState = false;
    }

    if ( event instanceof NavigationEnd) {
      this.isPopState = false;
    }
  });
}
}
