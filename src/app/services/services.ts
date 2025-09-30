import { Injectable } from '@angular/core';
import { Note } from '../notes/notes/note.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {
  private notes: Note[] = [
    { id: 1, title: 'Sample Note 1', content: 'This is sample note 1.' },
    { id: 2, title: 'Sample Note 2', content: 'This is sample note 2.' }
  ];

  // Observable to emit search results
  private searchResultsSource = new BehaviorSubject<Note[]>(this.notes);
  searchResults$ = this.searchResultsSource.asObservable();

  getNotes() {
    return this.notes;
  }

  addNote(note: Note) {
    note.id = this.notes.length ? this.notes[this.notes.length - 1].id + 1 : 1;
    this.notes.push(note);
    this.emitSearchResults(this.notes);
  }

  updateNote(note: Note) {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
      this.emitSearchResults(this.notes);
    }
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(n => n.id === id);
  }

  searchNotes(query: string) {
    if (!query.trim()) {
      this.emitSearchResults(this.notes);
      return;
    }
    const results = this.notes.filter(n =>
      n.title.toLowerCase().includes(query.toLowerCase())
    );
    this.emitSearchResults(results);
  }

  private emitSearchResults(notes: Note[]) {
    this.searchResultsSource.next(notes);
  }
}
