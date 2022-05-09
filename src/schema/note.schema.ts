import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import * as mongoose from 'mongoose';
import  * as moment from 'moment';
const now = moment();
@Schema()


export class Note  {
  
    @Prop()
    noteCode: string;
    @Prop()
    noteTitle : string;
    @Prop()
    noteDescription : string;
    @Prop({default: now.locale('tr').format("LLL")})
    nodeDate : string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    noteCategory : Category

}

export const NoteSchema  = SchemaFactory.createForClass(Note);