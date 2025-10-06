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
    if (this.note.title && this.note.content) {
      this.services.createNotes(this.note).subscribe(() => {
      this.router.navigate(['/home']);
      });
    }
  }
}
