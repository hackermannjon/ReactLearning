// src/app/services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from '../../../models/champion.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl =
    'https://lol-api-jv-santos.joao-santos-3563.workers.dev';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/champions`);
  }

  getChampionById(id: string): Observable<Champion> {
    return this.http.get<Champion>(`${this.apiUrl}/champions/${id}`);
  }
}
