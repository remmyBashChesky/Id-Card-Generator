import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  returnUrl: any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // reset login status
    this.userService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const registeredUserData = this.loginForm.value

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(registeredUserData.email, registeredUserData.password)
      .subscribe(
        data => {

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(data));

          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.loading = false;
        });
  }
}

