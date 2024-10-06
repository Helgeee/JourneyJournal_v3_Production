import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, Req, } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthorGuard } from 'src/guard/author.guard';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  // POST-метод для создания новой заметки
// Используется ValidationPipe для валидации данных
// Используется JwtAuthGuard для авторизации
  @Post()
  @UsePipes(new ValidationPipe)
  @UseGuards(JwtAuthGuard)
  create(@Body() createNoteDto: CreateNoteDto , @Req() req) {
    return this.notesService.create(createNoteDto , +req.user.id );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req ) {
    return this.notesService.findAll( +req.user.id);
  }

  @Get(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard )
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  update(
    @Param('id') id: string, 
    @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
  
  // @Get('pagination')
  // @UseGuards(JwtAuthGuard)
  // findAllWithPagination(
  // @Req() req , 
  // @Query('page') page: number , 
  // @Query('limit') limit: number , ) {
  //   return this.notesService.findAllWithPagination(
  //     +req.user.id ,
  //      +page ,
  //       +limit
  //     )
  // } 

}
