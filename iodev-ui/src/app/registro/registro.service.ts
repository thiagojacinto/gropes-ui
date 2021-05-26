import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private http: HttpClient) {}

  validarRegistro(registro: any): any {
    if (!registro.profissional.empresa) {
      registro.profissional.empresa = 'Autonomo';
    }

    return registro;
  }

  registrarNovoUsuario(registro: any): Observable<any> {
    const baseUrl = environment.API + '/usuarios';
    registro.id = Math.floor(Math.random() * 10000);
    const registroValido = this.validarRegistro(registro);
    return this.http.post<any>(baseUrl, registroValido);
  }
}
