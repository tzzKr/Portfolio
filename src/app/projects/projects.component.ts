import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ProjectsComponent {


  projekts=[
    {
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: './assets/img/MockUps/Polloloco.png',
      url: 'https://gerhard-baliet.developerakademie.net/Programming/Projekte/modul_11/index.html',
      github: 'https://github.com/tzzKr/El-Polo-Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      side: '',
      sidebtn: ''

    },
    {
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './assets/img/MockUps/Join.png',
      url: 'https://gerhard-baliet.developerakademie.net/Programming/Projekte/modul_10/Join-Project/index.html',
      github: 'https://github.com/tzzKr/Join-Project',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      side: 'flex-direction: row-reverse; text-align: end;',
      sidebtn: 'justify-content: flex-end;'
    },
    {
      name: 'Pokedex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './assets/img/MockUps/Pokedex.png',
      url: 'https://gerhard-baliet.developerakademie.net/Programming/Projekte/modul%209/Pokedex/index.html',
      github: 'https://github.com/tzzKr/Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      side: '',
      sidebtn: ''

    },
    {
      name: 'Ring Of Fire',
      description: 'Engage in a fun multiplayer drinking game with a deck of cards, powered by Google Firebase. Play with friends and enjoy',
      image: './assets/img/MockUps/Ringoffire.png',
      url: 'https://ring-of-fire-dbe91.web.app/',
      github: 'https://github.com/tzzKr/RingOfFire',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Material Design', 'Angular', 'Firebase'],
      side: 'flex-direction: row-reverse; text-align: end; ',
      sidebtn: 'justify-content: flex-end;'

    },



  ]

  isElementInViewPort(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  

  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: any) {
  const element = document.getElementById('my-element');
  
  if (this.isElementInViewPort(element)) {
    element.classList.add('fadeInUp');
  }
}

}
