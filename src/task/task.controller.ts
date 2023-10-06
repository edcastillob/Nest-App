import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service'
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

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
    
    @Delete(':id')
    deleteTask(@Param('id') id: string ){
       this.taskService.deleteTask(id)
       return this.getAllTasks() 
    }    
    
    
    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDTO ){
       return this.taskService.updateTask(id, updateFields)
    }
}
