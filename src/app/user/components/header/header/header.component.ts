import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any

  constructor(private authService: AuthService,
    private router: Router,
    private tokenService: TokenStorageService) { }

  ngOnInit(): void {
  }
  
  login() {
    this.router.navigate(['login'], { queryParams: { retUrl: this.router.url } })
  }
  signout() {
    this.tokenService.signOut()
    this.router.navigate(['home'])
  }
  getCurrentUser() {
    return this.tokenService.getUser()
  }
  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
