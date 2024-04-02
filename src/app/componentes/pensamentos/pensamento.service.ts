import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API_URL = 'https://my-thoughts-server.vercel.app/pensamento'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API_URL)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API_URL, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API_URL}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )

  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API_URL}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API_URL}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
