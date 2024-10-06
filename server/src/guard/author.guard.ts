import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { CollectionService } from "src/collection/collection.service";
import { NotesService } from "src/notes/notes.service";

@Injectable() 
export class AuthorGuard implements CanActivate{
    constructor(
        private readonly notesService: NotesService,
        private readonly collectionServise: CollectionService,
    ){}
    async canActivate(context: ExecutionContext):Promise<boolean>  {
        const request = context.switchToHttp().getRequest()
        const { id , type } = request.params 
        let entity 
        switch(type){
            case 'note':
                entity = await this.notesService.findOne(id)
                break
            case 'collection':
                entity = await this.collectionServise.findOne(id)
                break
            default:
                throw new NotFoundException('Something went wrong...') 
        }
        const user = request.user
        // индификация по id
        if(entity && user &&  entity.user.id === user.id ){
            return true
        }
        throw new BadRequestException(' Something went wrong...')
    }
}