import { Injectable } from '@angular/core';
import { Note } from '../notes/notes/note.model';

@Injectable({
  providedIn: 'root'
})
export class Services {
  private notes: Note[] = [
    { id: 1, title: 'Sample Note 1', content: 'This is sample note 1.' },
    { id: 2, title: 'Sample Note 2', content: 'This is sample note 2.' }
  ];

  getNotes() {
    return this.notes;
  }

  addNote(note: Note) {
    // Assign a new ID if not provided
    note.id = this.notes.length ? this.notes[this.notes.length - 1].id + 1 : 1;
    this.notes.push(note);
  }

  updateNote(note: Note) {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
    }
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(n => n.id === id);
  }
}
