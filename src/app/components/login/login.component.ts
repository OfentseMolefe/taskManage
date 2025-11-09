import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  // Just placeholders for loading and error states
  isLoading$: Observable<boolean> | undefined;
  error$: Observable<string | null> | undefined;
  

  // Reactive Form for Login
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(6)]
    });

    //Here is where the Observable can be used for form value changes\
    //this.isLoading$ = this.store.select(selectAuthLoading);
   // this.error$ = this.store.select(selectAuthError);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Handle login logic here, e.g., call AuthService ,and dispatch login action got to Dashboard page
      console.log('Login attempt with', username, password);
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    } 
  }


}
