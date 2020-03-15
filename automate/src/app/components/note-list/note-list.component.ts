import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(
    private noteService : NoteService
  ) { }

  ngOnInit() {

    if(localStorage.getItem("notes")) {
    this.noteService.noteList = JSON.parse(localStorage.getItem("notes"));
    }
  }

}
