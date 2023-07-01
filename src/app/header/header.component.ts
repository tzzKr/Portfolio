import { Component, HostListener, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)',  opacity: 1}))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})



export class HeaderComponent {

  isActive = false;

  toggleMenu() {
    this.isActive = !this.isActive;
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

  ngOnInit() {
    this.onResize({ target: window });
  }
}
