import { Module } from '@nestjs/common';
import { FirebaseAuthService } from '../services/firebase.service';

@Module({
  providers: [FirebaseAuthService],
  exports: [FirebaseAuthService], // So it can be injected elsewhere
})
export class FirebaseModule {}
