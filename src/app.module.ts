import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConnectionToken,MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';
import { CategoryService } from './service/student/category/category.service';
import { CategoryController } from './controller/student/category/category.controller';
import  StudentController  from './controller/student/student.controller'
import { Connection, Mongoose } from 'mongoose';
import { Category, CategorySchema } from './schema/category.schema';
import * as AutoIncrementFactory from 'mongoose-sequence';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  MongooseModule.forFeature([{name: 'Category',schema: CategorySchema}]),
  
],

  controllers: [AppController, StudentController, CategoryController],
  providers: [AppService, StudentService, CategoryService  ],
})
export class AppModule { }
