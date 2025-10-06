import { Injectable } from '@angular/core';
import { Note } from '../notes/notes/note.model';
import { map, Observable } from 'rxjs';
import { environment } from '../environements/environement';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class Services {


  // Observable to emit search results
  constructor(private http: HttpClient) {}
  getNoteById(id: number): Observable<Note> {
  return this.http.get<Note>(`${environment.apiUrl}/notes/${id}`);
  }


  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiUrl}/notes`).pipe(
       map(data => data as Note[])
      );
  }

   createNotes(note: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.apiUrl}/notes`, note);
  }
  
  editNotes(note: Note): Observable<Note> {
    return this.http.patch<Note>(`${environment.apiUrl}/notes/${note.id}`, note);
  }

  deleteNotes(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/notes/${id}`);
  }




}
