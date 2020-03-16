import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../models/NoteModel';
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
  /**
   * Value of icon selected
   */
  iconSelected : number;
  /**
   * Checks whether new note is added or previous one is edited
   */
  isNewNote : boolean;

  constructor(
    private noteService : NoteService
  ) { }

  ngOnInit() {

    this.noteService.noteListObservable.subscribe(data => {
      if(data && data.length) {
        this.noteList = data;
      }
      if(!this.isNewNote)
      this.setNewNoteModel();
    })

    this.noteService.iconSelectedObservable.subscribe(data => {
      if(data) {
        this.iconSelected = data;
        if(this.iconSelected == this.noteService.NEW_NOTE_ICON) {
          this.addNote();
          this.setNewNoteModel();
        }
      }
    })
  }

  /**
   * Sets new note model
   */
  setNewNoteModel() {
    this.newNote = new NoteModel();
    this.newNote.dateTime = new Date();
    this.isNewNote = true;

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

  /**
   * Adds newly added note in list
   */
  addNote() {
    if(this.newNote.data && this.noteList && this.noteList.length) {
      this.noteService.updateNoteList(this.noteList);
      localStorage.setItem("notes",JSON.stringify(this.noteList));
      this.isNewNote = false;
    }
  }

}
