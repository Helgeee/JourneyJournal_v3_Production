import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe,   } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';



// http://localhost:3002/api/user

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
    
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

}
