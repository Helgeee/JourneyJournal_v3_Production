import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { NotesService } from 'src/notes/notes.service';
import { Note } from 'src/notes/entities/note.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Collection , Note ])],
  controllers: [CollectionController],
  providers: [CollectionService, NotesService ],
})
export class CollectionModule {}
