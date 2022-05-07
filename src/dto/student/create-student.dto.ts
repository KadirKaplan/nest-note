import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsNumber()
    @IsNotEmpty() 
    readonly roleNumber: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
    @IsNumber()
    @IsNotEmpty()
    readonly marks: number;
}