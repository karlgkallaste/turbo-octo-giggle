import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './modules/firebase.module';
import { AuthController } from './controllers/auth.controller';
import { FirebaseAuthService } from './services/firebase.service';
import { ConfigModule } from '@nestjs/config';
import {ProfileController} from "./controllers/profile.controller";
import {DbService} from "./services/db.service";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env.dev',
  }),
  
FirebaseModule],
  controllers: [AppController, AuthController, ProfileController],
  providers: [AppService, FirebaseAuthService, DbService],
})
export class AppModule {}
