import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';



import { MapsModule } from './maps/maps.module';
import { MessageModule } from './message/message.module';
import { SubscriptionModule } from './subscription/subscription.module';

import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();


@Module({
  imports: 
  [
    UserModule, 
    NotesModule,
    
    CollectionModule,
    
    AuthModule,

    MapsModule,

    CollectionModule,

    SubscriptionModule,

    MessageModule,

    ConfigModule.forRoot( {isGlobal: true} ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService ) => ({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities:  [__dirname + '/**/*.entity.{js,ts}'],
          synchronize: true,
      }),

      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
      
    })
   ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}