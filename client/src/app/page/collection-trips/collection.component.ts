import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent  implements OnInit {
  // элемент
  @ViewChild('input', { static: true } ) inputRef!: ElementRef;

  image!: File
  imagePreview: string =''

  collectionForm: FormGroup
  
  collectionId : number = 0
  title: string =''
  method : 'create' | 'update' = 'create'
 // данные получаемые из формы
  constructor(public collectionService: CollectionService , private elementRef: ElementRef ){
    this.collectionForm = new FormGroup({
      img: new FormControl( '' , null),
      title: new FormControl( '' , [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.collectionService.findAll()
    
  }
  //Этот код является методом который запускается при отправке формы
  onSubmit(){
    if(this.collectionForm.valid  && this.method === 'create' ) {
        console.log(this.collectionForm.value)
        this.collectionService.create(this.collectionForm.value.title)
        this.collectionForm.reset()
    } else {
        this.update()
        this.collectionForm.reset()
        this.method = 'create'
    }
  }
  update(){  //обновление
    this.collectionService.update(this.collectionId , this.collectionForm.value.title)
  }
  edit(id: number , title: string) {
    this.collectionId = id 
    this.collectionForm.setValue({ title }) 
    this.method = 'update'
  }
  delete(id: number) { // удаление
    this.collectionService.delete(id)
  }
  triggerClick(){ // ввод данных при нажатии кнопки
    this.inputRef.nativeElement.click();
  }
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
}
