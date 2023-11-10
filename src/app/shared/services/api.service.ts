import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Response<T> {
  success: boolean;
  message: string;
  result?: T;
}

@Injectable()
export class ApiService<T> {
  private apiURL = 'api';

  constructor(private http: HttpClient) {}

  list(path: string): Observable<Response<T[]>> {
    return this.http.get(`${this.apiURL}/${path}`) as Observable<Response<T[]>>;
  }

  read(path: string, id: number): Observable<Response<T>> {
    return this.http.get(`${this.apiURL}/${path}/${id}`) as Observable<Response<T>>;
  }

  create(path: string, body: object): Observable<Response<T>> {
    return this.http.post(`${this.apiURL}/${path}`, body) as Observable<Response<T>>;
  }

  update(path: string, id: string, body: object): Observable<Response<T>> {
    return this.http.patch(`${this.apiURL}/${path}/${id}`, body) as Observable<Response<T>>;
  }
}
