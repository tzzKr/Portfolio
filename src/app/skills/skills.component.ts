import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  icons = [
    {
      name: 'Angular',
      url: './assets/img/Icons/Angular.svg',
    },
    {
      name: 'API',
      url: './assets/img/Icons/Api.svg',
    },
    {
      name: 'CSS',
      url: './assets/img/Icons/css.svg',
    },
    {
      name: 'Firebase',
      url: './assets/img/Icons/Firebase.svg',
    },
    {
      name: 'Git',
      url: './assets/img/Icons/Git.svg',
    },
    {
      name: 'HTML',
      url: './assets/img/Icons/html.svg',
    },
    {
      name: 'JavaScript',
      url: './assets/img/Icons/JavaScript.svg',
    },
    {
      name: 'Scrum',
      url: './assets/img/Icons/Scrum.svg',
    },
    {
      name: 'Material Design',
      url: './assets/img/Icons/MaterialDesign.svg',
    },
    {
      name: 'TypeScript',
      url: './assets/img/Icons/Typescript.svg',
    },
    {
      name: 'Wordpress',
      url: './assets/img/Icons/Wordpress.svg',
    },
  ];

  constructor() {}
}
