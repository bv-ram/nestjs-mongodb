
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
export class orders{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    age:Number

    @IsString()
    @IsOptional()
    gender:string

    @IsString()
    @IsNotEmpty()
    productName:string

    @IsNumber()
    @IsNotEmpty()
    productPrice:string

    
    quantity:string
}