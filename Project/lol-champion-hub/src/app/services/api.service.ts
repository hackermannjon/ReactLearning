// src/app/services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from '../../../models/champion.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/champions`);
  }

  getChampionById(id: string): Observable<Champion> {
    return this.http.get<Champion>(`${this.apiUrl}/champions/${id}`);
  }
}
