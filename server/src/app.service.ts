import { Injectable } from '@nestjs/common';

@Injectable()


export class AppService {
  getHello(): string {
    return 'Hello BRo!';
  }


  getProfile(): string {
    return 'Its me profile';
  }
}
