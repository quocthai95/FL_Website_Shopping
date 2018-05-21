import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isPopState = false;
  subscription: Subscription;

  constructor(private router: Router, private localStra: LocationStrategy) {}

  ngOnInit() {
    this.localStra.onPopState(() => {
      this.isPopState = true;
    });

  this.subscription = this.router.events.subscribe((event) => {
    if ( event instanceof NavigationEnd && !this.isPopState) {
      window.scrollTo(0, 0);
      this.isPopState = false;
    }

    if ( event instanceof NavigationEnd) {
      this.isPopState = false;
    }
  });
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
