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
   * Instance of todays date and time
   */
  todaysDate : Date = new Date();
  newNote : NoteModel = new NoteModel();

  constructor(
    private noteService : NoteService
  ) { }

  ngOnInit() {
    if(!this.noteService.noteList) {
      this.noteService.noteList = [];
    }
    this.noteService.noteList.push(this.newNote);
  }

  onNoteChange() {
    if(this.newNote.data) {
      localStorage.setItem("notes",JSON.stringify(this.newNote));
    }
  }

}
