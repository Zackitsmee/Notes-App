import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css']  // fix typo from styleUrl
})
export class Header {
  searchQuery: string = '';
  userInitial: string = 'U';
  showAccountMenu: boolean = false;

  constructor(private router: Router) {}

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  onAddNote() {
    // Navigate to your CreateNote component
    this.router.navigate(['/createnote']);
  }

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  onProfile() { this.showAccountMenu = false; }
  onSettings() { this.showAccountMenu = false; }
  onSignOut() { this.showAccountMenu = false; }
}
