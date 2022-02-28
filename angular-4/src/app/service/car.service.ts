import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  create(Car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, Car);
  }

  update(Car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.apiUrl}/${Car.id}`, Car);
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/${id}`);
  }
}
