import { IsEmail, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    email: string

    @IsString()
    username: string

    @MinLength( 6 , {message: 'Password must be more then 6 symbols'})
    password: string
}

import { BadRequestException } from '@nestjs/common';

export class UserAlreadyExistsException extends BadRequestException {
  constructor(message?: string) {
    super(message || 'This email or login already exists');
  }
}
