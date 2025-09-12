import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-edit',
 standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.html',
  styleUrls: ['./edit.scss']
})
export class Edit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const taskId = +idParam;
      this.task = this.taskService.getTaskById(taskId);
    }
  }

  saveChanges(): void {
    if (this.task) {
      this.taskService.editTask(this.task);
      this.router.navigate(['/']); 
    }
  }
  cancel(): void {
    this.router.navigate(['/']);
  }
}
