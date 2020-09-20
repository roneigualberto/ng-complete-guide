import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.WEB_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occured';

          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
          }

          return throwError(errorMessage);
        })
      );
  }
}
