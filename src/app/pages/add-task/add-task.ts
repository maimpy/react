import { Component } from '@angular/core';
import { TaskService } from '../../services/task'; 
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template:`
  <h2>Add study ssesion</h2>
  <form (ngSubmit)="addTask()">
    <input [(ngModel)]="title" name="title" placeholder="Title" required>
    <input [(ngModel)]="subject" name="subject" placeholder="Subject" required>
    <input [(ngModel)]="duration" name="duration" type="number" placeholder="Hours" required>
    <input [(ngModel)]="date" name="date" type="date" required>
    <button type="submit">Save</button>
  </form>
  
  <a routerLink="/">Back</a>

  `

})

export class AddTask {
  title = '';
  subject = '';
  duration = 1;
  date = new Date();

  constructor(private taskService: TaskService, private router: Router)
  {

  }
  
  addTask()
  {
    this.taskService.addTask
    ({
      title: this.title,
      subject: this.subject,
      duration: this.duration,
      date: this.date
    });
    this.router.navigate(['/']);
  }
}
