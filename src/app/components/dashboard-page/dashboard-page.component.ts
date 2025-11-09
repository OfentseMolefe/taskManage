import { Component ,OnInit} from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  user$: Observer<any>;
  task$: Observer<Task[]>;

  constructor() {
    // Initialize the observers here or inject services to fetch data
    this.user$ = {
      next: (user) => console.log('User data:', user),
      error: (err) => console.error('Error fetching user data:', err),
      complete: () => console.log('User data stream completed')
    };
    this.task$ = {
      next: (tasks) => console.log('Task data:', tasks),
      error: (err) => console.error('Error fetching task data:', err),
      complete: () => console.log('Task data stream completed')
    };
  }

  ngOnInit(): void {
    // Fetch user and task data here and pass to observers
    
  }
  logout() {
    // logout logic here
    console.log('User logged out');
  }

}
