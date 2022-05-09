import { Document, ObjectId } from "mongoose";

export interface INote extends Document {
    readonly noteCode : string;
    readonly noteTitle : string;
    readonly noteDescription : string;
    readonly nodeDate : Date;
    readonly nodeCategory : ObjectId;
}