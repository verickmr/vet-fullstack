import { SchedulingService } from './scheduling.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
export declare class SchedulingController {
    private readonly schedulingService;
    constructor(schedulingService: SchedulingService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
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
    update(id: string, updateSchedulingDto: UpdateSchedulingDto): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
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
    remove(id: string): import(".prisma/client").Prisma.Prisma__SchedulingClient<{
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
