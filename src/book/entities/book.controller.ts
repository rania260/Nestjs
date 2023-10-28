import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.bookService.findById(id);
  }
  @Post(':title')
  create(@Param('title') title: string) {
    return this.bookService.create(title);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}