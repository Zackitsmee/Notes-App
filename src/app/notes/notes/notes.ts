// notes.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class Notes {
  notes = [
    { id: 1, title: 'Sample Note 1', content: 'This is the content of sample note 1.' },
    { id: 2, title: 'Sample Note 2', content: 'This is the content of sample note 2.' }
  ];  // Mock data; replace with actual storage like localStorage

  constructor(private router: Router) {}

  createNote() {
    this.router.navigate(['/createnote']);  // Adjust route as needed
  }

  editNote(id: number) {
    this.router.navigate(['/editnote', id]);
  }
  
  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

}