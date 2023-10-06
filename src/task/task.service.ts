import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity'
import { v4 } from 'uuid'

@Injectable()
export class TaskService {
private  tasks: Task[] = [{ 
    id: '1', 
    title: 'first task',
    description: 'some task',
    status: TaskStatus.PENDING
}]

  getAllTask() { return this.tasks }

  createTask(title: string, description: string) {
    const task = {
    id: v4(), 
    title: 'second task',
    description: 'some task',
    status: TaskStatus.PENDING
    }
    this.tasks.push(task);
    return task
  }

  updateTask() {}
  deleteTask() {}
}
