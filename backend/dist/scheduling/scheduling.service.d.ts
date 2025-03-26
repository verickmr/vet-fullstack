import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { PrismService } from 'src/db/prism.service';
export declare class SchedulingService {
    private readonly prismaService;
    constructor(prismaService: PrismService);
    create(createSchedulingDto: CreateSchedulingDto): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
        responsibleName: string;
        petName: string;
        cpfOrMatricula: string;
        email: string;
        phoneNumber: string;
        desiredTime: string;
        vaccinationCard: string | null;
        appointmentDate: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        responsibleName: string;
        petName: string;
        cpfOrMatricula: string;
        email: string;
        phoneNumber: string;
        desiredTime: string;
        vaccinationCard: string | null;
        appointmentDate: string;
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
        responsibleName: string;
        petName: string;
        cpfOrMatricula: string;
        email: string;
        phoneNumber: string;
        desiredTime: string;
        vaccinationCard: string | null;
        appointmentDate: string;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateSchedulingDto: UpdateSchedulingDto): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
        responsibleName: string;
        petName: string;
        cpfOrMatricula: string;
        email: string;
        phoneNumber: string;
        desiredTime: string;
        vaccinationCard: string | null;
        appointmentDate: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
        responsibleName: string;
        petName: string;
        cpfOrMatricula: string;
        email: string;
        phoneNumber: string;
        desiredTime: string;
        vaccinationCard: string | null;
        appointmentDate: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
