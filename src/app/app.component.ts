import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome \n';
 isUserLoggedIn = this.userService.isLoggedIn()
  constructor(private userService: UserService) {
    console.log(this.isUserLoggedIn)
  }
}
