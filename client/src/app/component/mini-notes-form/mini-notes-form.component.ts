import { Component , } from "@angular/core";
import { NotesService } from "../../services/note.service";


@Component({
  selector: 'app-mini-notes-form',
  templateUrl: './mini-notes-form.component.html',
  styleUrl: './mini-notes-form.component.scss'
})


export class MiniNotesFormComponent  {
  
  constructor(
    readonly NotesService: NotesService
  ){}

  ngOnInit(): void {
    this.NotesService.findAll()
  }


  deleted(id: number){
    this.NotesService.delete(id)
  }
}
