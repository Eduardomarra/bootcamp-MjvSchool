import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  collaborators = {
    name: "Eduardo",
    lastName: "Marra",
    wage: 10000,
    office: "Developer"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
