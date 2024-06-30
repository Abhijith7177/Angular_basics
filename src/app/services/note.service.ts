import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>(this.notes);
  private isEdit: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  createNote(note: Note): void {
    note.id = new Date().getTime();
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  getNotesObservable(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.notesSubject.next(this.notes);
  }

  setEditabale(value: boolean): void {
    this.isEdit.next(value);
  }

  getEditable(){
    return this.isEdit.asObservable();
  }


  updateNote(updateNote:Note):void{
    const index = this.notes.findIndex((note) => note.id === updateNote.id)
    if(index !== -1){
      this.notes[index] = updateNote
      this.notesSubject.next(this.notes)
    }
}

}
