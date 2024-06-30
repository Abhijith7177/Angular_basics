import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  @Output () selectedNote = new EventEmitter<Note>();

  constructor(private noteServices: NoteService) {}

  ngOnInit() {
    this.noteServices.getNotesObservable().subscribe((notes) => {
      this.notes = notes;
    });
  }

  editNote(note: Note) {
    this.selectedNote.emit(note);
    this.noteServices.setEditabale(true);
  }
  deleteNote(id: number): void {
    this.noteServices.deleteNote(id);
  }
}
