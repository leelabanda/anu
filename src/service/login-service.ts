import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/auth/login';

  loading = signal(false);
  error = signal<string | null>(null);

  login(data: any): Observable<any> {
    this.loading.set(true);

    return this.http.post(this.apiUrl, data);
  }
}