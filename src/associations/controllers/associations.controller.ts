import { Controller, Post, Put, Body, Get } from '@nestjs/common';
import { Association } from '../models/association.model';
import { AssociationsService } from '../services/associations.service';

@Controller('associations')
export class AssociationsController {
  constructor(private associationsService: AssociationsService) {}

  @Post()
  addAssociation(@Body() association: Association) {}

  @Put()
  editAssociation() {}

  @Get()
  getAllAssociations() {
    return this.associationsService.getAllAssociations();
  }
}
