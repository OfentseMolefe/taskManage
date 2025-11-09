import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  errorMessage: string = '';
  isEditMode: boolean = false;
  currentTaskId: number | null = null;
  
  constructor(private fb: FormBuilder ,private taskService: TaskService,private formGroup: FormGroup) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      description: ['',[Validators.required, Validators.maxLength(200)]],
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() { 
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      this.taskService.addTask(task).subscribe({
        next: (newTask) => {
          console.log('Task added successfully:', newTask);
          this.taskForm.reset();
        },
        error: (err) => {
          console.error('Error adding task:', err);
          this.errorMessage = 'There was an error adding the task. Please try again.';
        }
      }); 

    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    } 

   }

   editTask(task: Task) {
    if (this.taskForm.valid) {
      const updatedTask: Task = { ...task, ...this.taskForm.value };
      this.taskService.updateTask(updatedTask).subscribe({
        next: (task) => {
          console.log('Task updated successfully:', task);
          this.taskForm.reset();
        },
        error: (err) => {
          console.error('Error updating task:', err);
          this.errorMessage = 'There was an error updating the task. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
   }  
  
   cancelEdit() {
    this.taskForm.reset();
   }  
  
  

}
