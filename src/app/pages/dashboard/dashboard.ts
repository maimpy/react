import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task'; 
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})  

export class Dashboard {
  tasks: Task[] = [];

  constructor(private taskService:TaskService, private router: Router)
  {
    this.tasks = this.taskService.getTask();
  }

  deleteTask(id:number)
  {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTask();
  }

  editTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }

}