import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service'
import { CreateTaskDTO } from './dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}
   
    @Get()
    getAllTasks(){
        return this.taskService.getAllTask()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO){
        return this.taskService.createTask(newTask.title, newTask.description)
    }
}
