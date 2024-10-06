import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Collection } from 'src/collection/entities/collection.entity';
import { CollectionService } from 'src/collection/collection.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Note , Collection])],
  controllers: [NotesController],
  providers: [NotesService , CollectionService ],
})
export class NotesModule {}
