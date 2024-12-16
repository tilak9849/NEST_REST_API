/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
    ItemsModule, // Import ItemsModule
    MongooseModule.forRoot(config.mongoURI), // Establish MongoDB connection
  ],
  controllers: [AppController], // Only include AppController here
  providers: [AppService], // Only include AppService here
})
export class AppModule {}
