import { IsEmail, IsNotEmpty, IsNumber, IsString, isNotEmpty, isNumber } from "class-validator";
export class address{
    address:string
    area:string
    city:string
    state:string
    country:string
    pincode:string
}
export class userModel{
    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsString()
    @IsNotEmpty()
    gender:string

    @IsNumber()
    @IsNotEmpty()
    dob:number

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsNumber()
    @IsNotEmpty()
    phoneNo:number

    address:address

}