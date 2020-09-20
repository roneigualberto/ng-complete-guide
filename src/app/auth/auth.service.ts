import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  WEB_API_KEY = 'AIzaSyAe3j_Ox0Z2xL_ONtwF9-isf63YEFYsb8A';

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.WEB_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}
