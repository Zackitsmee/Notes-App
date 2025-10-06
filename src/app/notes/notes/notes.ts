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
    this.services.getNotes().subscribe((data: any) => {
      this.notes = data.notes; // ✅ access the array
    });

  }

  editNotes(id: number) {
    this.router.navigate(['/editnote', id]);
  }

  deleteNote(id: number) {
    if (confirm("Are you sure you want to delete this note?")) {
      this.services.deleteNotes(id).subscribe(() => {
        this.notes = this.notes.filter(n => n.id !== id);
      });
    }
  }
}
