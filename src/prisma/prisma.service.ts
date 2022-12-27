import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


// in future add this to git ignore do not forget!!!
@Injectable()
export class PrismaService extends PrismaClient{

    constructor(){
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:password@localhost:5432/nest?schema=public'
                }
            }
        })
    }
}
