import { Component, OnInit } from "@angular/core";
import { NotesService } from "../../services/note.service";


@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss'
})



export class NotesFormComponent implements OnInit {
  constructor(
      readonly notesService: NotesService
  ){}

  // Метод ngOnInit() вызывается после создания компонента и инициализирует его.
  // В данном случае, при инициализации компонента вызывается метод findAll() сервиса notesService,
  // который загружает все заметки.
  ngOnInit(): void {
      this.notesService.findAll()
  }

  // Метод deleted(id: number) используется для удаления заметки по её идентификатору.
  // Принимает на вход идентификатор заметки (id) и вызывает метод delete(id) сервиса notesService.
  deleted(id: number){
      this.notesService.delete(id)
  }
}
