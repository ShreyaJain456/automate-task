import { Injectable } from '@angular/core';
import { NoteModel } from './models/NoteModel';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  COLLAPSE_ICON : number = 1;
  EXPAND_ICON : number = 2;
  DELETE_ICON : number = 3;
  NEW_NOTE_ICON : number = 4;

  private noteBehaviorSubject : BehaviorSubject<Array<NoteModel>>;
  noteListObservable : Observable<Array<NoteModel>>;

  private iconSelected : BehaviorSubject<number>;
  iconSelectedObservable : Observable<number>;

  private selectedNote : BehaviorSubject<NoteModel>;
  selectedNoteObservable : Observable<NoteModel>;

  constructor() {

    this.noteBehaviorSubject = new BehaviorSubject([]);
    this.noteListObservable = this.noteBehaviorSubject.asObservable();

    this.iconSelected = new BehaviorSubject(undefined);
    this.iconSelectedObservable = this.iconSelected.asObservable();

    this.selectedNote = new BehaviorSubject(undefined);
    this.selectedNoteObservable = this.selectedNote.asObservable();
   }

   /**
    * Updates list of note in observable
    * @param noteList List of notes
    */
   updateNoteList(noteList : Array<NoteModel>) {
    this.noteBehaviorSubject.next(noteList);
   }

   /**
    * Updates selected icon observable
    * @param icon Icon value selected
    */
   updateSelectedIcon(icon : number) {
     this.iconSelected.next(icon);
   }
}
