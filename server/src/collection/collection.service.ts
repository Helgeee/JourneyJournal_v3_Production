import {BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';



@Injectable()
export class CollectionService {

  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
   ) {}

  //Создаёт Новую коллекцию

  async create(createCollectionDto: CreateCollectionDto, id: number) {

    const isExist = await this.collectionRepository.findBy({
      user: { id },
      title: createCollectionDto.title
    })

    if(isExist.length) 
      throw new BadRequestException('Такая коллекция уже существует!') ///Проверка на существует ли такая уже Коллекция

    const newCollection = {
        
        title: createCollectionDto.title,
        img: createCollectionDto.img,
        user: { 
         id: id , 
        }, //присваивание id пользователя к коллекции 
      }

    return await this.collectionRepository.save(newCollection)
    
  }
  // поиск всех коллекций пользователя
  async findAll(id: number) {
    return await this.collectionRepository.find({
      where:{
        user: { id },
      },
      relations: { 
        notes: true,
      },
    })
    
    
  }
   // поиск коллекций пользователя
  async findOne(id: number) { 
    const collection = await this.collectionRepository.findOne({
      where: { id },
      relations: {
        user: true,
        notes: true,
      },
    })
    console.log(collection)
    if(!collection)  throw new  NotFoundException('Коллекции не найдены')
    return collection 
  }

  // обновление коллекций

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    const collection = await this.collectionRepository.findOne({
      where: { id } ,
      
    })
    console.log( id , updateCollectionDto)
    if(!collection)  throw new  NotFoundException('Коллекция не найдена')
    return await this.collectionRepository.update( id , updateCollectionDto) ;
  }


  // удаление коллекции

  async remove(id: number) {
    const collection = await this.collectionRepository.findOne({
      where: { id },
  })
      if(!collection)  throw new NotFoundException('Коллекция не найдена')

    return await this.collectionRepository.delete(id)
  }

}
