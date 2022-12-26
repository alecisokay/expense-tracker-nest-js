import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';



@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

    }
    async signup(dto : AuthDto){
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.users.create(
            {
                data: {
                    email: dto.email,
                    hash,
                },
            }
        );

        delete user.hash;

        return user;


    }
    signin(){
        return {msg: 'i have signed in'};
    }
   
}