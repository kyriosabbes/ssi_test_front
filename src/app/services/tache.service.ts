import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tache } from '../models/tache.model';

const baseUrl = 'http://localhost:8080/api/taches';

@Injectable({
  providedIn: 'root'
})
export class tacheService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<tache[]> {
    return this.http.get<tache[]>(baseUrl);
  }

  get(id: any): Observable<tache> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<tache[]> {
    return this.http.get<tache[]>(`${baseUrl}?title=${title}`);
  }
}
