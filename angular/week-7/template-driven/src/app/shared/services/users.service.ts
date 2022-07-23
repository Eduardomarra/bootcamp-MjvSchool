import { Injectable } from '@angular/core';
import { Users } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<Users> = [
    {
      id: 1,
      nome: "Eduardo",
      email: "eduardomarra@gmail.com",
      senha: "123456"
    },
    {
      id: 2,
      nome: "Nayane",
      email: "nayanebrandao@gmail.com",
      senha: "123456"
    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByEmailAndSenha(email: string, senha: string) {
    return this.users.find((user) =>  user.email === email && user.senha === senha );
  }
}
