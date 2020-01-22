import { Module } from '@nestjs/common';
import { AssociationsController } from './controllers/associations.controller';
import { AssociationsService } from './services/associations.service';

@Module({
  imports: [AssociationsModule],
  controllers: [AssociationsController],
  providers: [AssociationsService],
})
export class AssociationsModule {}
