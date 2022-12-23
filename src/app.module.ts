import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [AuthModule, TicketsModule, UsersModule],
})
export class AppModule {}
