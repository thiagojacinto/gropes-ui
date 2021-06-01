import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css'],
})
export class ListaItemsComponent implements OnInit, OnChanges {
  @Input() registros: any;

  cores = ['#9C27B0', '#673AB7', '#FF9800', '#607D8B'];
  icones = [
    PrimeIcons.COMPASS,
    PrimeIcons.GLOBE,
    PrimeIcons.MOBILE,
    PrimeIcons.COG,
    PrimeIcons.CLOUD,
  ];
  escala = ['Baixa', 'Média-baixa', 'Média', 'Média-alta', 'Alta'];
  lista: any[] = [
    {
      tecnologia: 'Carregando...',
      contatoDesde: '',
      icon: this.aleatorioDe(this.icones),
      color: this.aleatorioDe(this.cores)
    },
  ];

  getAlign() {
    return window.innerWidth > 650
      ? 'alternate'
      : 'right'
  };

  aleatorioDe(array: any[]): any {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.registros) {
      console.log(`[INFO] CHANGE of Lista de Itens`);
      // console.log(
      //   `[INFO] Lista de Itens: CONTENT of empresaUsuarioItens: ${JSON.stringify(
      //     this.registros['empresaUsuarioItens']
      //   )}`
      // );
      // console.log(
      //   `[INFO] Lista de Itens: CONTENT of tecnologiasUsuario: ${JSON.stringify(
      //     this.registros['tecnologiasUsuario']
      //   )}`
      // );

      this.lista = this.atualizarLista();

      // console.log(
      //   `[INFO] Novo conteudo da lista: ${JSON.stringify(this.lista)}`
      // );
    }
  }

  ngOnInit(): void {
    this.lista = this.atualizarLista();
  }

  truncate(n: number): number {
    return Math.floor(n);
  }

  listarTecnologiasPessoais(tecArray: any[]): any[] {
    return tecArray.map((item) => {
      return {
        isProfissional: false,
        tecnologia: item.tecnologia.descricao,
        relevancia: this.truncate(item.tecnologia.relevancia * 100),
        inovatividade: this.escala[item.inovatividade - 1],
        aplicacaoPratica: this.escala[item.aplicacaoPratica - 1],
        contatoDesde: new Date(item.estudaDesde),
        icon: this.aleatorioDe(this.icones),
        color: this.aleatorioDe(this.cores),
      };
    });
  }

  listarTecnologiasProfissionais(tecArray: any[]): any[] {
    return tecArray.map((item) => {
      return {
        isProfissional: true,
        tecnologia: item.tecnologia.descricao,
        relevancia: this.truncate(item.tecnologia.relevancia * 100),
        frequencia: this.escala[item.frequencia - 1],
        contatoDesde: new Date(item.dataIni),
        icon: this.aleatorioDe(this.icones),
        color: this.aleatorioDe(this.cores),
      };
    });
  }

  atualizarLista() {
    return this.listarTecnologiasProfissionais(
      this.registros['empresaUsuarioItens']
    ).concat(
      this.listarTecnologiasPessoais(this.registros['tecnologiasUsuario'])
    );
  }
}
