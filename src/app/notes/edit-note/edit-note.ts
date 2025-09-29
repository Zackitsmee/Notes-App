// edit-note.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  standalone: false,
  templateUrl: './edit-note.html',
  styleUrls: ['./edit-note.css']
})
export class EditNote {
  note = {
    title: '',
    content: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Note edited:', this.note);
    alert('Changes saved!');
    this.router.navigate(['/notes']);  // Navigate back to notes list or adjust as needed
  }

  cancel() {
    this.router.navigate(['/notes']);
  }
}