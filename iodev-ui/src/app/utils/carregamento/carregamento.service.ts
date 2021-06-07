import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarregamentoService {
  isLoadingSubject!: Subject<boolean>;

  constructor() {
    this.isLoadingSubject = new Subject<boolean>();
  }

  getCarregamento() {
    return this.isLoadingSubject
      .asObservable()
      .pipe(startWith(false));
  }

  iniciar() {
    this.isLoadingSubject.next(true);
  }

  finalizar() {
    this.isLoadingSubject.next(false);
  }
}
