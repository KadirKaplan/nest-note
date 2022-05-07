import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Category {
    @Prop()
    categoryCode: string;
    @Prop()
    categoryTitle: string;
    @Prop()
    categoryDescription: string;
    
}

export const CategorySchema = SchemaFactory.createForClass(Category);