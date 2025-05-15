import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import dayjs from 'dayjs';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class BookingsService {
  private collection;
  constructor(private readonly firebaseService: FirebaseService) {
    const db = this.firebaseService.getDb();
    this.collection = db.collection('bookings');
  }

  async getAll() {
    const snapshot = await this.collection.where('isDeleted', '!=', true).get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async getByDateRange(from: string, to: string) {
    const startDate = dayjs(from).toISOString();
    const endDate = dayjs(to).toISOString();

    const snapshot = await this.collection
      .where('isDeleted', '!=', true)
      .where('startDate', '<=', endDate)
      .where('endDate', '>=', startDate)
      .get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
  
  async create(data: CreateBookingDto) {
    try {
      data.startDate = dayjs(new Date(data.startDate)).format('YYYY-MM-DD');
      data.endDate = dayjs(new Date(data.endDate)).format('YYYY-MM-DD');
      data.createdDate = new Date().toISOString();
      data.updatedDate = new Date().toISOString();
      data.isDeleted = false;

      await this.checkDateOverlap(data.startDate, data.endDate);
      const res = await this.collection.add(data);
      return { id: res.id };
    } catch (error) {
      // Логування помилки або надання відповіді клієнту
      console.error('Error creating booking:', error);
      throw new BadRequestException('Дата вже зайнята або дані некоректні');
    }
  }

  async update(id: string, data: CreateBookingDto) {
    try {
      data.startDate = dayjs(new Date(data.startDate)).format('YYYY-MM-DD');
      data.endDate = dayjs(new Date(data.endDate)).format('YYYY-MM-DD');
      data.updatedDate = new Date().toISOString();
      if (data.isDeleted === undefined) {
        data.isDeleted = false;
      }
      await this.checkDateOverlap(data.startDate, data.endDate, id);
      const docRef = this.collection.doc(id);
      const res = await docRef.get();
      if (!res.exists) {
        throw new BadRequestException(`Документ з id ${id} не знайдено`);
      }
      await docRef.set(data, { merge: true });
      return { id: res.id };
    } catch (error) {
      // Логування помилки або надання відповіді клієнту
      console.error('Error creating booking:', error);

      // Якщо це вже Exception — перекидаємо його далі
      throw new BadRequestException('Дата вже зайнята або дані некоректні');
    }
  }

  async delete(id: string) {
    try {
      const docRef = this.collection.doc(id);
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new NotFoundException('Бронювання не знайдено');
      }
      await docRef.update({ isDeleted: true });
      return { message: 'Бронювання видалене' };
    } catch (error) {
      // Логування помилки або надання відповіді клієнту
      console.error('Error creating booking:', error);
      throw new BadRequestException('Бронювання не знайдено');
    }
  }

  async checkDateOverlap(
    startDate: string,
    endDate: string,
    currentIdToExclude?: string,
  ) {
    const querySnapshot = await this.collection
      .where('isDeleted', '!=', true)
      .where('startDate', '<', endDate)
      .where('endDate', '>', startDate)
      .get();

    const conflicting = querySnapshot.docs.filter(
      (doc) => doc.id !== currentIdToExclude,
    );

    if (conflicting.length > 0) {
      throw new Error('The date range overlaps with an existing booking.');
    }
  }
}
