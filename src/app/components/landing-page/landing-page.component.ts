import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
isLoginMode: boolean = true;

toggleMode() {
  this.isLoginMode = !this.isLoginMode; 
}

}
