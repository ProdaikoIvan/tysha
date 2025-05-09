import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Post('create')
  create(@Body() dto: CreateBookingDto) {
    return this.service.create(dto);
  }

  @Get('byMonth')
  findByMonth(@Query('month') month: string, @Query('year') year: string) {
    return this.service.findByMonth(+month, +year);
  }

  @Get('byDate')
  findByDate() {
    return this.service.findByDate();
  }

  @Get('all')
  getAll() {
    return this.service.getAll();
  }
}
