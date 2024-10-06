import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { INotes, INotesData } from "../types/notes.interface";
import { CollectionService } from "./collection.service";
import { Observable, tap } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class NotesService {
    
    notesSig = signal<INotes[]>([]);

    constructor(
        private readonly http: HttpClient,
        private readonly toastr: ToastrService,
        private collectionService: CollectionService,
    ){}

    //поиск всех заметок 
    findAll(){
        return this.http.get<INotes[]>('notes').subscribe((res) => this.notesSig.set(res))
    }
    // создание заметки
   
    create(data: INotesData) {
        return this.http.post<INotes>('notes', data)
        .pipe(tap((newNotes) => {
            const collection = this.collectionService
                .collectionsSig()
                .find((ctg) => ctg.id ===  newNotes.collection?.id)

                this.notesSig.update((notes) => [
                    {...newNotes, collection: collection },
                    ...notes,
                    
                ])
                console.log(newNotes);
        }))
        
        .subscribe(() => this.toastr.success('Заметка создана'))
    } 

     // обновление заметки

    update(id: number, title: string) {
        this.http.patch(`notes/note/${id}`, { title } ).subscribe(() => {
            this.notesSig.update((notes) =>
                notes.map((note) =>
                    (note.id == id ? { ...note, title ,  } : note))
              )
            this.toastr.success('Заметка обновлена')
        })
    }
     // удаление заметки

    delete(id: number){
        this.http.delete(`notes/note/${id}`).subscribe(() => {
            this.notesSig.update((notes) => notes.filter((notes) => notes.id === id))
            this.toastr.warning('Заметка удалена')
        })
    }
}


