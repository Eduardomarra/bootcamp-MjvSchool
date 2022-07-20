import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [
    {
      id: 1,
      nome: 'Eduardo Marra',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01',
    },
    {
      id: 2,
      nome: 'Nayane Marra',
      valorMensalidade: 110,
      dataUltimoPgto: '2021-07-28',
      dataInclusaoSistema: '2021-07-10',
    },
    {
      id: 3,
      nome: 'Vera Lucia',
      valorMensalidade: 80,
      dataUltimoPgto: '2022-05-01',
      dataInclusaoSistema: '2022-04-15',
    },
    {
      id: 4,
      nome: 'Delfina Gomes',
      valorMensalidade: 150,
      dataUltimoPgto: '2022-03-10',
      dataInclusaoSistema: '2022-03-01',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
