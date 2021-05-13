export interface RegistroUsuario {
  basico: {
    nome: string;
    email: string;
    senha: string;
    endereco: {
      rua?: string;
      numero?: string;
      complemento?: string;
      cep?: number;
    };
  };
  profissionais: [
    {
      empresa: string;
      dataIni: Date;
      dataFim: Date;
      trabalhaAtual?: boolean;
      descricao?: string;
      dificuldade: number;
      tecnologias: [
        {
          tecnologia: string;
          frequenciaDeUso: number;
          dataIni: Date;
          dataFim: Date;
          utilizaAtual?: boolean;
        }
      ];
    }
  ];
  pessoais: [
    {
      tecnologia: string;
      aplicacaoPratica?: number;
      dataIni: Date;
      dataFim: Date;
      maisDe24Meses?: boolean;
    }
  ];
}