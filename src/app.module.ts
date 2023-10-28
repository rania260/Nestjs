import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BookService} from './book/entities/book.service';
import {BookController} from './book/entities/book.controller';

@Module({
  controllers: [BookController],
  providers: [BookService],
})

 
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
