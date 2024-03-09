import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8082/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const credentials = btoa(`${username}:${password}`); // Encodage en Base64
    return this.http.post(this.loginUrl, null, {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      responseType: 'text', // Indiquer que vous attendez une réponse texte
    });
  }
}
