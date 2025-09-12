import { Component } from '@angular/core';
import { TaskService } from '../../services/task'; 
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <h2> Statistics </h2>
  <p>Total study time: {{totalHourse}}hourse</p>
  <a routerLink="/">Back</a>
  `
})
export class Statistics {
  totalHourse = 0;

  constructor(private taskService: TaskService)
  {
    const tasks = this.taskService.getTask();

    this.totalHourse = tasks.reduce((sum, t) => sum + t.duration, 0);
  }
}
