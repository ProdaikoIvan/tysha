import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import db from '../firebase';
import dayjs from 'dayjs';

@Injectable()
export class BookingsService {
  private collection = db.collection('bookings');

  async create(data: CreateBookingDto) {
    try {
      data.startDate = dayjs(new Date(data.startDate)).format('YYYY-MM-DD');
      data.endDate = dayjs(new Date(data.endDate)).format('YYYY-MM-DD');
      data.createdDate = new Date().toISOString();
      data.updatedDate = new Date().toISOString();
      
      await this.checkDateOverlap(data.startDate, data.endDate);
      const res = await this.collection.add(data);
      return { id: res.id };
    } catch (error) {
      // Логування помилки або надання відповіді клієнту
      console.error('Error creating booking:', error);
      throw new Error('Failed to create booking. Please check the input data.');
    }
  }

  async checkDateOverlap(startDate: string, endDate: string) {
    const querySnapshot = await this.collection
      .where('startDate', '<', endDate)
      .where('endDate', '>=', startDate)
      .get();

    if (!querySnapshot.empty) {
      throw new Error('The date range overlaps with an existing booking.');
    }
  }

  async findByMonth(month: number, year: number) {
    const startDate = dayjs(new Date(year, month - 1, 1))
      .startOf('month')
      .toISOString();
    const endDate = dayjs(new Date(year, month - 1, 1))
      .endOf('month')
      .toISOString();

    const snapshot = await this.collection
      .where('startDate', '<=', endDate)
      .where('endDate', '>=', startDate)
      .get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async findByDate() {}

  async getAll() {
    const snapshot = await this.collection.get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}
