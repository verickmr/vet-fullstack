import { Global, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismService extends PrismaClient implements OnModuleInit { 
    async onModuleInit() {
        await this.$connect();
    }
    
}
