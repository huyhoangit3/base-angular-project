import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any
  retUrl: any = 'home'
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['hoang'],
      password: ['password'],
    })
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl')
      })
  }

  onLoginSubmit(): any {
    this.authService.generateToken(this.loginForm).subscribe({
      next: (data) => {
        this.tokenStorageService.saveToken(data.token)
        this.authService.getCurrentUser().subscribe({
          next: (currentUser) => this.tokenStorageService.saveUser(currentUser),
          error: (err) => console.log("Error occurs when fetching current logged in user!")
        })
        if (this.retUrl !== null) {
          this.router.navigate([this.retUrl]);
        } else {
          this.router.navigate(['home']);
        }
      },
      error: (err) => console.log(err.msg)
    })
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
