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
    registro.profissionais.forEach((prof: any) => {
      if (!prof.empresa) {
        prof.empresa = 'Autonomo';
      }
    })

    return registro;
  }

  registrarNovoUsuario(registro: any): Observable<any> {
    const baseUrl = environment.API + '/usuarios';
    if (!environment.production) {
      registro.id = Math.floor(Math.random() * 10000);
    }
    
    const registroValido = this.validarRegistro(registro);
    // console.log(`[INFO] > > > POST registrarUsuario: ${JSON.stringify(registroValido)}`);
    return this.http.post<any>(baseUrl, registroValido);
  }
}
