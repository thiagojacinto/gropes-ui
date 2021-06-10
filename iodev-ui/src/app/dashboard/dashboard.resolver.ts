import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarregamentoService } from '../utils/carregamento/carregamento.service';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<Observable<any>> {
  
  constructor(
    private router: Router,
    private dashboardService: DashboardService, 
    private carregamentoService: CarregamentoService
    ) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<any> | HttpErrorResponse> {
    const id = route.paramMap.get('uid')
    // console.log(`ID = ${id}`);
    return this.dashboardService.obterUsuarioPorId(Number(id))
      .pipe(catchError((error: Observable<HttpErrorResponse>) => {
        this.router.navigate(['/erro404']);
        this.carregamentoService.finalizar();
        return error;
      }))
  }
}
