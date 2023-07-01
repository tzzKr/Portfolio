import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
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
    this.onResize({ target: window });

  }

  goTo(component: string) {
    this.router.navigate([], { fragment: component });
  }


  about!: string;
  skills!: string;
  portfolio!: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: any; }) {
    this.about = event.target.innerWidth < 1300 ? '#aboutMobile' : '#about';
    this.skills = event.target.innerWidth < 1300 ? '#skillsMobile' : '#skills';
    this.portfolio = event.target.innerWidth < 1300 ? '#portfolioMobile' : '#about';
  }

  
}
