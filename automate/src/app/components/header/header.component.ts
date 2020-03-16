import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icons : Array<{title : string, iconName : string, value : number}> = [
    {title : "Collapse", iconName : 'delete', value : this.noteService.COLLAPSE_ICON },
    {title : "Expand", iconName : 'delete', value : this.noteService.EXPAND_ICON},
    {title : "Delete", iconName : 'delete_outline', value : this.noteService.DELETE_ICON},
    {title : "New Note", iconName : 'delete', value : this.noteService.NEW_NOTE_ICON},
    {title : "Lock", iconName : 'delete', value : 0}
  ]
  selectedIcon : number;

  constructor(
    private noteService : NoteService
  ) { }

  ngOnInit() {
  }

  iconClicked(index : number) {
    this.selectedIcon = index;
    this.noteService.updateSelectedIcon(this.icons[this.selectedIcon].value);

  }

}
