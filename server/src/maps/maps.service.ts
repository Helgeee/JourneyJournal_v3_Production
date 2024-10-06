import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';

@Injectable()
export class MapsService {
  create(createMapDto: CreateMapDto) {
    return CreateMapDto;
  }

  findAll() {
    return `This action returns all maps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return UpdateMapDto ;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }
}
