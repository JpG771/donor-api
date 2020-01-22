import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociationsModule } from './associations/associations.module';

@Module({
  imports: [AssociationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
