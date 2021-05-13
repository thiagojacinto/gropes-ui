import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroUsuario } from './registrar-usuario/registro-usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  registrarNovoUsuario(registro: RegistroUsuario) {
    
    const baseUrl = environment.API + '/registro'

    return this.http.post<any>(baseUrl, registro); 
  }
}
