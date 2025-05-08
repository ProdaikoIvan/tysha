import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import db from '../firebase';


@Injectable()
export class BookingsService {
  private collection = db.collection('bookings');

  async create(createBookingDto: CreateBookingDto) {
    const res = await this.collection.add(createBookingDto);
    return { id: res.id };
  }

  async getAll() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
