import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}



    // dto data transfer object
    // dont use Req becuase it is express and I want to switch to Fastify.
    @Post('signup')
    signup(@Body() dto : AuthDto){
        return this.authService.signup(dto);
    }


    @Post('signin')
    signin(@Body() dto : AuthDto){
        return this.authService.signin(dto);
    }

    
}