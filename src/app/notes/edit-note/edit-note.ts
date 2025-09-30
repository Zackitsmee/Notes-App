import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../../services/services';
import { Note } from '../notes/note.model';

@Component({
  selector: 'app-edit-note',
  standalone: false,
  templateUrl: './edit-note.html',
  styleUrls: ['./edit-note.css']
})
export class EditNote implements OnInit {
  note: Note = { id: 0, title: '', content: '' };
  isEditMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private services: Services
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existingNote = this.services.getNoteById(id);
      if (existingNote) {
        this.note = { ...existingNote }; // copy note for editing
        this.isEditMode = true;
      }
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.services.updateNote(this.note); // update existing
    } else {
      this.services.addNote(this.note); // add new
    }

    alert('Changes saved!');
    this.router.navigate(['/']); // back to dashboard
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
