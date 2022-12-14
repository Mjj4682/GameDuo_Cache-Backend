import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Boss } from 'src/entities/Boss';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Boss])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
