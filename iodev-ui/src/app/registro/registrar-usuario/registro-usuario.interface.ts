export interface RegistroUsuario {
  basico: {
    nome: string;
    email: string;
    senha: string;
    nascimento: string;
    endereco: {
      rua?: string;
      numero?: string;
      complemento?: string;
      cep?: number;
    };
  };
  profissionais: [
    {
      autonomo: boolean;
      empresa: string;
      dataIni: string;
      dataFim: string;
      trabalhaAtual?: boolean;
      descricao?: string;
      dificuldade: number;
      tecnologias: [
        {
          tecnologia: string;
          frequenciaDeUso: number;
          dataIni: string;
          dataFim: string;
          utilizaAtual?: boolean;
        }
      ];
    }
  ];
  pessoais: [
    {
      tecnologia: string;
      aplicacaoPratica?: number;
      dataIni: string;
      dataFim: string;
      maisDe24Meses?: boolean;
    }
  ];
}
