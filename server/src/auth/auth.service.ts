import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { IUser } from 'src/types/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private  readonly usersService : UserService , 
    private readonly jwtService: JwtService,
   ) {}
   //  проверка аутентификационные данные в базе данных
   async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email)
    const passwordIsMatch = await argon2.verify( user.password, password )
  
    if (user && passwordIsMatch) {
      return user
    }
    throw new UnauthorizedException('User or password are incorrect!')
  }
  //функция для аутентификации пользователя. 
  async login(user: IUser){
    const {id , email} = user
    return {
     id, 
     email, 
     token: this.jwtService.sign( { id: user.id , email: user.email } ),
    
    }
  }
}
