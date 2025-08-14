import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  sendMessage(data: { nombre: string; telefono: string; email: string; mensaje: string }): Observable<any> {
    return this.http.post('/api/contact', data);
  }
}
