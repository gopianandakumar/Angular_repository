import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';


  constructor(private router: Router) {

  }

  login(): void {
    this.router.navigate(['/login']);
  }

  home(): void {
    this.router.navigate(['/home']);
  }

 
  aboutus(): void {
    this.router.navigate(['/aboutus']);
  }

  contactus(): void {
    this.router.navigate(['/contactus']);
  }

}
