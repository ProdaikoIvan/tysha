import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private adminApp: admin.app.App;

  constructor() {
    this.adminApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
  }

  getDb() {
    return this.adminApp.firestore();
  }

  async verifyToken(token: string) {
    return this.adminApp.auth().verifyIdToken(token);
  }
}