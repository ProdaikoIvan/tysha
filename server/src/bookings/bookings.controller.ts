import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Put(':id')
  async updateBooking(@Param('id') id: string, @Body() updateData: CreateBookingDto,
  ): Promise<any> {
    return this.service.update(id, updateData);
  }

  @Get('byMonth')
  findByMonth(@Query('from') from: string, @Query('to') to: string) {
    return this.service.getByDateRange(from, to);
  }

  @Get('all')
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.service.delete(id);
    return { message: 'Бронювання успішно видалено' };
  }
}
