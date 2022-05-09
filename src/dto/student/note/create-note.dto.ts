import {IsNotEmpty,IsString,IsNumber} from "class-validator";
import { ObjectId } from "mongoose";

export class CreateNoteDto {

    @IsString()
    @IsNotEmpty()
    readonly noteCode : string;
    @IsString()
    @IsNotEmpty()
    readonly noteTitle : string;
    @IsString()
    @IsNotEmpty()
    readonly noteDescription : string;
    readonly nodeDate: Date;
    readonly nodeCategory : ObjectId;
}