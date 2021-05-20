import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroUsuario } from './registrar-usuario/registro-usuario.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private http: HttpClient) {}

  registrarNovoUsuario(registro: any): Observable<any> {
    const baseUrl = environment.API + '/usuarios';
    registro.id = Math.floor(Math.random() * 10000);
    return this.http.post<any>(baseUrl, registro);
  }
}
