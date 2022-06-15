import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  user = [
      {
        "id": 1,
        "name" : "Eduardo",
        "lastName" : "Marra",
        "assignment" : "Exercicio de Módulos Angular",
        "office": "Web Developer",
        "wage": 10000,
      },
      {
        "id": 2,
        "name" : "Nayane",
        "lastName" : "Marra",
        "assignment" : "Exercicio de Módulos Angular",
        "office": "Dentist",
        "wage": 13000,
      },
      {
        "id": 3,
        "name" : "Vera",
        "lastName" : "Lucia",
        "assignment" : "Exercicio de Módulos Angular",
        "office": "Public Worker",
        "wage": 15000,
      },
      {
        "id": 4,
        "name" : "Theodoro",
        "lastName" : "Canino",
        "assignment" : "Exercicio de Módulos Angular",
        "office": "To sleep",
        "wage": 500,
      },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
