import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";



@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

    }
    async signup(dto : AuthDto){
        const hash = await argon.hash(dto.password);

        try {
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
            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError ) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException ('email taken')
                }
            }
            throw error;

        }
    }


    async signin(dto : AuthDto){

        const users = await this.prisma.users.findFirst ({
            where: {
                email: dto.email,
            },
        });

        if(!users) throw new ForbiddenException('Credentials incorrect');

        const pwMatches = await argon.verify(users.hash, dto.password)

        if(!pwMatches) throw new ForbiddenException('Credentials incorrect');


        return {msg: 'i have signed in'};
    }
   
}