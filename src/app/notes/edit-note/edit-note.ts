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
    const id = +this.route.snapshot.params['id']; // get id from URL
    if (id) {
      this.isEditMode = true;
      this.services.getNoteById(id).subscribe((data) => {
        this.note = data;
      });
    }
  }

  onSubmit() {
    if (this.note.title && this.note.content) {
      this.services.editNotes(this.note).subscribe(() => {
        this.router.navigate(['/home']); // redirect after saving
      });
    }
  }

  cancel() {
    this.router.navigate(['/home']); // go back to notes list
  }
}
