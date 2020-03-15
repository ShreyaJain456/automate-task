import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../note.service';
import { NoteModel } from '../../models/NoteMoel';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  /**
   * List of all notes
   */
  noteList: Array<NoteModel> = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {

    this.noteService.noteListObservable.subscribe(data => {
      if(data && data.length) {
        this.noteList = data;
      }
    })
    this.getNoteList();
  }

  /**
   * Fetches list of data from local storage
   */
  getNoteList() {
    
    if (localStorage.getItem("notes")) {
      let list = JSON.parse(localStorage.getItem("notes"));
      if(list && !list.length) {
        this.noteList[0] = list;         
      } else {
        this.noteList = list;
      }

      this.noteList.forEach(note => {
        note.dateTime = new Date(note.dateTime);
      });

      if(this.noteList && this.noteList.length) {
        this.noteService.updateNoteList(this.noteList);
      }
    }
  }


}
