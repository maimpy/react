import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTask(): Task[]{
    return this.tasks;
  }

  addTask(task: Omit<Task,'id'>){
    const newTask: Task = {id: this.nextId++, ...task};
    this.tasks.push(newTask);
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  editTask(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

}
