export interface CreateSchedulingDto {
    responsibleName: string;
    petName: string;
    cpfOrMatricula: string;
    email: string;
    phoneNumber: string;
    desiredTime: string;
    vaccinationCard?: string;
    appointmentDate: string;
}
