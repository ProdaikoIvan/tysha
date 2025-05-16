import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Get('list')
  findBookingList(@Query('from') from: string, @Query('to') to: string) {
    return this.service.getBookingList(from, to);
  }

  @UseGuards(FirebaseAuthGuard)
  @Put(':id')
  async updateBooking(
    @Param('id') id: string,
    @Body() updateData: CreateBookingDto,
  ): Promise<any> {
    return this.service.update(id, updateData);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get('byMonth')
  findByMonth(@Query('from') from: string, @Query('to') to: string) {
    return this.service.getByDateRange(from, to);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get('all')
  getAll() {
    return this.service.getAll();
  }

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.create(dto);
  }

  @UseGuards(FirebaseAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.service.delete(id);
    return { message: 'Бронювання успішно видалено' };
  }
}
