import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private url = "Transaccion";
  constructor(private http: HttpClient) { }

  public GetTransaccion() : Observable<Transaccion[]>{
    return this.http.get<Transaccion[]>(
      `${environment.apiUrl}/${this.url}`
      );

  }

  public UpdateTransaccion(tras: Transaccion) : Observable<Transaccion[]>{
    return this.http.put<Transaccion[]>(
      `${environment.apiUrl}/${this.url}`, tras
      );

  }

  public CreateTransaccion(tras: Transaccion) : Observable<Transaccion[]>{
    return this.http.post<Transaccion[]>(
      `${environment.apiUrl}/${this.url}`, tras
      );

  }

  public DeleteTransaccion(tras:Transaccion) : Observable<Transaccion[]>{
    return this.http.delete<Transaccion[]>(
      `${environment.apiUrl}/${this.url}/${tras.transaccionID}`
      );

  }
}
