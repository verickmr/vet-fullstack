import { Injectable } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { PrismService } from 'src/db/prism.service';

@Injectable()
export class SchedulingService {
  constructor(private readonly prismaService: PrismService){}

  create(createSchedulingDto: CreateSchedulingDto) {
    return this.prismaService.scheduling.create({
      data:createSchedulingDto
    })
  }

  findAll() {
    return this.prismaService.scheduling.findMany()
  }

  findOne(id: number) {
    return this.prismaService.scheduling.findUnique({
      where: {id}
    })
  }

  update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
    return  this.prismaService.scheduling.update({
      where: {id},
      data: updateSchedulingDto
    })
  }

  remove(id: number) {
    return  this.prismaService.scheduling.delete({
      where: {id}    })
}}
