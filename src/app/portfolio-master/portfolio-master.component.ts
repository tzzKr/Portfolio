import { ViewportScroller } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-master',
  templateUrl: './portfolio-master.component.html',
  styleUrls: ['./portfolio-master.component.scss']
})
export class PortfolioMasterComponent implements OnInit {
  
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  goTo(component: string) {
    this.router.navigate([], { fragment: component });
  }

}
