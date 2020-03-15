import { Injectable } from '@angular/core';
import { NoteModel } from './models/NoteMoel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteList : Array<NoteModel> = [];

  constructor() {
   }
}
