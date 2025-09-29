import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  standalone: false,
  templateUrl: './create-note.html',
  styleUrls: ['./create-note.css']
})
export class CreateNote {
  note = {
    title: '',
    content: ''
  };

  onSubmit() {
    console.log('Note created:', this.note);
    alert('Note saved!');
    // Reset after save
    this.note = { title: '', content: '' };
  }
}
