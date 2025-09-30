import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Services } from '../../services/services';
import { Note } from '../notes/note.model';

@Component({
  selector: 'app-create-note',
  standalone: false,
  templateUrl: './create-note.html',
  styleUrls: ['./create-note.css']
})
export class CreateNote {
  note: Note = { id: 0, title: '', content: '' }; // use Note model

  constructor(private router: Router, private services: Services) {}

  onSubmit() {
    // Add the new note via the service
    this.services.addNote(this.note);

    console.log('Note created:', this.note);
    alert('Note saved!');

    // Reset form
    this.note = { id: 0, title: '', content: '' };

    // Navigate back to dashboard
    this.router.navigate(['/']);
  }
}
