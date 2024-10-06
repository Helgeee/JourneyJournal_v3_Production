import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {}
/// создание заметки 
  async create(createNoteDto: CreateNoteDto , id: number) { 
    const newNote = {
      user: { 
        id: id 
      },
      img: createNoteDto.img,
      title: createNoteDto.title ,
      coordinate:  createNoteDto.coordinate,
      text: createNoteDto.text,
      collection: { id: createNoteDto.collection } , 
    }
    if(!newNote) throw new BadRequestException(' Что-то пошло не так... ')  

    console.log(createNoteDto)

    return await this.notesRepository.save(newNote) 
   }
  // поиск заметок
  async  findAll(id: number) {
    const notes = await this.notesRepository.find({
      where: {
        user: { id } ,
      },
      order: {
        createdAt:'DESC',
      },
    })
    return notes ;
  }
// поиск заметки
  async  findOne(id: number) {

    const notes = await this.notesRepository.findOne({
      where: {
        user: { id } ,
      },
      relations: {
        user: true,
      },
    })
    if(!notes)  throw new NotFoundException('Что-то пошло не так...')
    return notes;
  }
//Обновление заметки
  async  update(id: number, updateNoteDto: UpdateNoteDto) {
    const notes = await this.notesRepository.findOne({
    where: { id },
  })
  if(!notes)  throw new NotFoundException('Что-то пошло не так...')

  return await this.notesRepository.update( id , updateNoteDto ) ; 
    
  }
// удаление заметки
  async  remove(id: number) {
    const notes = await this.notesRepository.findOne({
      where: {
        user: { id } ,
      },
  })
      if(!notes)  throw new NotFoundException('Что-то пошло не так...')

    return await this.notesRepository.delete(id)
  }
  //пагинация
  async findAllWithPagination( id: number , page: number , limit: number) {
    const notes = await this.notesRepository.find({
      where: {
        user: { id } ,
      },
      relations:{
        user: true,
      },
      order: {
        createdAt: "DESC",
      },
      take: limit ,
      skip: (page - 1 ) * limit,
    })
    return notes;
  }
}


