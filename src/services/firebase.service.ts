import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,  Auth, User, UserCredential } from 'firebase/auth';

@Injectable()
export class FirebaseAuthService {
  private auth: Auth;

  constructor(private configService: ConfigService) {
    const firebaseConfig = {
        apiKey: this.configService.get<string>('FIREBASE_API_KEY'),
        authDomain: this.configService.get<string>('FIREBASE_AUTH_DOMAIN'),
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
        storageBucket: this.configService.get<string>('FIREBASE_STORAGE_BUCKET'),
        messagingSenderId: this.configService.get<string>('FIREBASE_MESSAGING_SENDER_ID'),
        appId: this.configService.get<string>('FIREBASE_APP_ID'),
        measurementId: this.configService.get<string>('FIREBASE_MEASUREMENT_ID'),
      
    };

    const firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(firebaseApp);
  }

  getAuthInstance(): Auth {
    return this.auth;
  }

  async createUser(email: string, password: string): Promise<{ user: any } | { error: string }> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return { user: userCredential.user };
    } catch (error) {
      return { error: error.message };
    }
  }
}
