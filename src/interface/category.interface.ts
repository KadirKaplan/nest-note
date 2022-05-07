import { Document } from "mongoose";

export interface ICategory extends Document {
    readonly categoryCode : string;
    readonly categoryTitle : string;
    readonly categoryDescription : string;
}