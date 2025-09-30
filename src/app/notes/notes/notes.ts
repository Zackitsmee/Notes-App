import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/services'; // import your service
import { Note } from '../notes/note.model'; // import the Note model

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class Notes implements OnInit {
  notes: Note[] = [];

  constructor(private router: Router, private services: Services) {}

  ngOnInit() {
    this.notes = this.services.getNotes(); // load notes from service
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
