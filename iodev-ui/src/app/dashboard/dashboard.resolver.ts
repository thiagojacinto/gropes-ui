import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<Observable<any>> {
  
  constructor(private dashboardService: DashboardService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('uid')
    console.log(`ID = ${id}`);
    return this.dashboardService.obterUsuarioPorId(Number(id))
      .pipe(catchError((error: HttpErrorResponse ) => {
        const resposta = {
          message: error.message,
          status: error.status,
          ok: error.ok,
        };
        console.error(resposta);
        this.router.navigate(['erro404'])
        return of(resposta);
      }))
  }
}
