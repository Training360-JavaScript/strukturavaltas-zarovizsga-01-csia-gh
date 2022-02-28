import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drug } from '../model/drug';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.apiUrl}/drugs`);
  }
}
