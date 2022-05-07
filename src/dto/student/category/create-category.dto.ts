import {IsNotEmpty,IsString,IsNumber} from "class-validator";

export class CreateCategoryDto {

    @IsString()
    @IsNotEmpty()
    readonly categoryCode : string;
    @IsString()
    @IsNotEmpty()
    readonly categoryTitle : string;
    @IsString()
    @IsNotEmpty()
    readonly categoryDescription : string;
}