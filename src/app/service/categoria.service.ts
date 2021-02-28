import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categoria`
    return this.http.get<Categoria[]>(url);
  }

  findById(id: string): Observable<Categoria> {
    const url = `${this.baseUrl}/categoria/${id}`;
    return this.http.get<Categoria>(url);

  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categoria`
    return this.http.post<Categoria>(url, categoria)
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categoria/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria)
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/categoria/${id}`;
    return this.http.delete<void>(url);
  }

  message(string: string, action: string) {
     this.snack.open(string, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
