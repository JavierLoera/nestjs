import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { usersProviders } from './user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports:[UserService],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UserModule {}
