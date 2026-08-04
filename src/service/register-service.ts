import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http = inject(HttpClient);

  private apiUrl = "http://localhost:8080/api/auth/register";

  loading = signal(false);
  error = signal<string | null>(null);

  register(data: any): Observable<any> {
    this.loading.set(true);

    return this.http.post(this.apiUrl, data);
  }
}