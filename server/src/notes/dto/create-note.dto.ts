import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Collection } from "src/collection/entities/collection.entity"
import { User } from "src/user/entities/user.entity"



export class CreateNoteDto {

    @IsOptional()
    img?: string

    @IsNotEmpty()
    @IsString()
    title: string

    @IsOptional()
    coordinate?: string
    
    @IsOptional()
    @IsString()
    text: string

    @IsOptional()
    @IsNumber()
    collection?: Collection

    @IsOptional()
    @IsNumber()
    user?: User
}
