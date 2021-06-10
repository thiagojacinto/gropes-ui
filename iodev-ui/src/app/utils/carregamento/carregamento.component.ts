import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarregamentoService } from './carregamento.service';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.component.html',
  styleUrls: ['./carregamento.component.css'],
})
export class CarregamentoComponent implements OnInit {
  isCarregando!: boolean;
  carregamento$!: Observable<boolean>;

  constructor(private carregamentoService: CarregamentoService) {}

  ngOnInit(): void {
    this.carregamento$ = this.carregamentoService.getCarregamento();

    this.carregamento$.subscribe((status) => {
      this.isCarregando = status;
    });
  }
}
