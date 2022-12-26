import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

    }
    signin(){
        return {msg: 'i have signed in'};
    }
    signup(){
        return {msg: 'i have signed up'};

    }
}