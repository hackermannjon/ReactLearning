// Arquivo: backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const requiredEnvVars = [
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PASSWORD',
  'DB_DATABASE',
];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Error ${envVar}.`);
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // Em desenvolvimento, cria as tabelas automaticamente.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
