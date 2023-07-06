import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {
  
  
  ngOnInit(): void {
    AOS.init();
  }



  projekts = [
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

}
