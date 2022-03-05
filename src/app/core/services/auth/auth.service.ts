import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, 
    private tokenStorageService: TokenStorageService) { }

  generateToken(loginForm: any): Observable<any> {
    return this.http.post(`${environment.baseApiUrl}/auth/signin`, loginForm.value)
  }

  isLoggedIn(): boolean {
      let token = this.tokenStorageService.getToken()
      return token === null ? false : true
  }
  getCurrentUser(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/auth/current-user`)
  }
}