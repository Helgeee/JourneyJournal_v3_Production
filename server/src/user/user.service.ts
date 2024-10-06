import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
     // Инициализация сервиса для работы с JWT-токенами
  ) {}
 // Метод создания нового пользователя
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
       // Поиск пользователя по email в базе данных
      where:{
        email: createUserDto.email,
      }
    })
     // Проверка наличия пользователя с таким email
    if(existUser) throw new BadRequestException('This email already exist!')
 // Создание нового пользователя с хешированным паролем
      const user =await this.userRepository.save({
        email: createUserDto.email,
        username: createUserDto.username,
        password: await argon2.hash(createUserDto.password) ,
      })
// Генерация JWT-токена для нового пользователя
      const token = this.jwtService.sign({ email: createUserDto.email})
      // Возвращение созданного пользователя и JWT-токена
    return {user , token} 
  }
   // Метод поиска пользователя по email
      async findOne(email: string) {
        // Поиск пользователя в базе данных по email
        return await this.userRepository.findOne({
          where: {
          email,
        },
      })
      }
}