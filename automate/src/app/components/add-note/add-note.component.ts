import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../models/NoteMoel';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  /**
   * Instance of new note
   */
  newNote : NoteModel = new NoteModel();
  /**
   * List of all notes
   */
  noteList : Array<NoteModel> = [];

  constructor(
    private noteService : NoteService
  ) { }

  ngOnInit() {

    this.noteService.noteListObservable.subscribe(data => {
      if(data && data.length) {
        this.noteList = data;
      }
    })

    this.addNote();
  }

  addNote() {
    this.newNote = new NoteModel();
    this.newNote.dateTime = new Date();

    this.noteList.push(this.newNote);
    this.noteList = this.noteList.sort((note1, note2) => {
      if(note1.dateTime.getTime() < note2.dateTime.getTime()) {
        return 1;
      } else {
        return -1;
      }
    });
    this.noteService.updateNoteList(this.noteList);
  }

  onNoteChange() {
    if(this.newNote.data && this.noteList && this.noteList.length) {
      this.noteService.updateNoteList(this.noteList);
      localStorage.setItem("notes",JSON.stringify(this.noteList));
    }
  }

}
