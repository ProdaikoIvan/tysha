import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Post()
  create(@Body() dto: CreateBookingDto) {
    console.log(dto);
    return null; //this.service.create(dto);
  }

  @Get('all')
  getAll() {
    return this.service.getAll();
  }
}
