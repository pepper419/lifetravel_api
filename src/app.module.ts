import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsersModule} from "./users/users.module";
import { ServicesModule } from "./services/services.module";
import {ClientsModule} from "./clients/clients.module";
import { PaymentsModule } from "./payments/payments.module";

@Module({
  imports: [
    ServicesModule,
    UsersModule,
    ClientsModule,
    PaymentsModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
