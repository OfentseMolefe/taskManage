import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasksByUserEmail(userEmail: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?userEmail=${userEmail}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, {...task, createdAt: new Date().toISOString()});
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }
}
