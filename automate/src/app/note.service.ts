import { Injectable } from '@angular/core';
import { NoteModel } from './models/NoteMoel';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteBehaviorSubject : BehaviorSubject<Array<NoteModel>>;
  noteListObservable : Observable<Array<NoteModel>>;

  constructor() {

    this.noteBehaviorSubject = new BehaviorSubject([]);
    this.noteListObservable = this.noteBehaviorSubject.asObservable();
   }

   updateNoteList(noteList : Array<NoteModel>) {
    this.noteBehaviorSubject.next(noteList);
   }
}
