import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../model/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: Users;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage) {
      this.user = JSON.parse(userSessionStorage)
    }
  }

  exit() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
