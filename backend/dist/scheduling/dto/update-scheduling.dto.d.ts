import { CreateSchedulingDto } from './create-scheduling.dto';
export interface UpdateSchedulingDto extends Partial<CreateSchedulingDto> {
    id: number;
}
