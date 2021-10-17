import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';
import { ApisModule } from './apis/apis.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
      serveRoot: 'cdn'
    }),
    MongooseModule.forRoot(process.env.DB),
    FileModule,
    ApisModule,
    UserModule
  ],
  providers: [FileService],
})
export class AppModule {}
