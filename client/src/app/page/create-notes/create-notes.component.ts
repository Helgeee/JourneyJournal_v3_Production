import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { NotesService } from "../../services/note.service";
import { CollectionService } from "../../services/collection.service";

@Component({
  selector: 'createNotes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent {

  @ViewChild('input', { static: true } ) inputRef!: ElementRef;

  image!: File
  imagePreview: string =''
// форму для ввода данных о заметке, а также функционал для загрузки изображения
// Конструктор класса, в котором инициализируются сервисы и создается FormGroup с необходимыми полями
  notesForm: FormGroup
    constructor(public notesService: NotesService, public collectionService: CollectionService , private elementRef: ElementRef){
    this.notesForm = new FormGroup({
      img: new FormControl( null ),
      title: new FormControl('', [Validators.required]),
      coordinate: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      collection: new FormControl('' , null),
    })
  }
    // Метод для вызова события клика на элементе input
  triggerClick(){
    this.inputRef.nativeElement.click();
  }
   // Метод для обработки загрузки файла изображения
  onFileUpload(event : any ){
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') { // проверка на тип строки
        this.imagePreview = reader.result;
      }
    }
    reader.readAsDataURL(file)
  }
   // Метод для отправки данных формы при условии их валидности
  onSubmit(){ //проверка и работа формы
    if(this.notesForm.valid ) {
      console.log(this.notesForm.value)
      this.notesService.create(this.notesForm.value)
      this.notesForm.reset()
    } 
  }
}