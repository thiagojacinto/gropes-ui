import { Directive, HostListener } from '@angular/core';
import { NavegacaoService } from './navegacao-service.service';

@Directive({
  selector: '[botaoVoltar]'
})
export class BotaoVoltarDirective {

  constructor(private navegacaoService: NavegacaoService) { }

  @HostListener('click')
  onClick(): void {
    this.navegacaoService.voltar();
  }
}
