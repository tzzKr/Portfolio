import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projekts=[
    {
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: './assets/img/MockUps/Polloloco.png',
      url: '',
      github: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      side: '',
      sidebtn: ''

    },
    {
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './assets/img/MockUps/Join.png',
      url: '',
      github: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      side: 'flex-direction: row-reverse; text-align: end;',
      sidebtn: 'justify-content: flex-end;'
    },
    {
      name: 'Pokedex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './assets/img/MockUps/Pokedex.png',
      url: '',
      github: '',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      side: '',
      sidebtn: ''

    },
    {
      name: 'Ring Of Fire',
      description: 'A website for a restaurant',
      image: './assets/img/MockUps/Ringoffire.png',
      url: '',
      github: '',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Material Design', 'Angular', 'Firebase'],
      side: 'flex-direction: row-reverse; text-align: end; ',
      sidebtn: 'justify-content: flex-end;'

    },



  ]
}
