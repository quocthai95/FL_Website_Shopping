import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  template: '<button (click)="topFunction()" id="myBtn" title="Go to top"><i class="fa fa-arrow-up"></i></button>',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        document.getElementById('myBtn').style.display = 'block';
      } else {
        document.getElementById('myBtn').style.display = 'none';
      }
    };
  }

  topFunction() {
    window.scrollTo(0, 0);
  }

}
