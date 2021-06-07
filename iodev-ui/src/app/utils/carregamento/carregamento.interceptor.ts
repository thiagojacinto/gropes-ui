import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarregamentoService } from './carregamento.service';

@Injectable({
  providedIn: 'root',
})
export class CarregamentoInterceptor implements HttpInterceptor {
  constructor(private carregamento: CarregamentoService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evento) => {
        if (evento instanceof HttpResponse || evento instanceof HttpErrorResponse) {
          this.carregamento.finalizar();
        } else {
          this.carregamento.iniciar();
        }
      })
    );
  }
}
