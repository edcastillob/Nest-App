import { TaskStatus } from '../task.entity';
import {
  IsString,
  IsNotEmpty,
  IsIn,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
export class UpdateTaskDTO {
  @IsString()
  @MinLength(3)
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus;
}
