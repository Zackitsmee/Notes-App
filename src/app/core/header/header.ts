import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/services';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  searchQuery: string = '';
  userInitial: string = 'U';
  showAccountMenu: boolean = false;

  constructor(private router: Router, private services: Services) {}

  

  onAddNote() {
    this.router.navigate(['/createnote']);
  }

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  onProfile() { this.showAccountMenu = false; }
  onSettings() { this.showAccountMenu = false; }
  onSignOut() { this.showAccountMenu = false; }
}
