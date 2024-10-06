import { IsNotEmpty,  IsNumber,  IsOptional} from "class-validator"
import { User } from "src/user/entities/user.entity"


export class CreateCollectionDto {

    @IsNotEmpty()
    title: string;

    @IsOptional()
    img: string;

    @IsNumber()
    @IsOptional()
    user?: User;

}

