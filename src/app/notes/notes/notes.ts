import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/services';
import { Note } from '../notes/note.model';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class Notes implements OnInit {
  colors: string[] = [
    "#FFD966",  // light yellow
    "#FFB6B9",  // soft pink
    "#A8E6CF",  // mint
    "#DCE775",  // lime
    "#B3E5FC",  // light blue
    "#FFECB3"   // light orange
  ];

  notes: Note[] = [];

  constructor(private router: Router, private services: Services) {}

  
    ngOnInit() {
    // Subscribe to search results
    this.services.searchResults$.subscribe(results => {
      this.notes = results;
    });
  }
  

  createNote() {
    this.router.navigate(['/editnote']); // empty edit for new note
  }

  editNote(id: number) {
    this.router.navigate(['/editnote', id]); // navigate with note id
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
