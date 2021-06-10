# IOdev UI
Projeto de webapp para a plataforma que utiliza da metodologia GROPES para avaliação da obsolescência relativa entre pessoas desenvolvedoras.
> I'll tell you what freedom is to me. No fear.
> 
> -- Nina Simone

## Como iniciar o projeto

No terminal, navegue até o diretório `iodev-ui/`. Instale as dependências necessárias com `npm install` e execute `ng serve` para iniciar o servidor de desenvolvimento local; então navegue para `http://localhost:4200/` e poderá visualizá-lo. O webapp vai reiniciar automaticamente em caso de mudanças no código fonte.

```bash
git clone git@github.com:thiagojacinto/gropes-ui.git # git clone considerando uso de SSH. Altere o comando caso contrário.
cd gropes-ui/iodev-ui/
npm i
ng serve
```

Mais info? [AQUI](iodev-ui/README.md).

## Como utilizar o mock do servidor

Para testar localmente é possível usar _mock_ do servidor a partir do projeto localizado no diretório `json-server-mock/` seguindo os comandos:

```bash
cd gropes-ui/json-server-mock/
npm i
```
E a partir da instalação de dependências, há duas opções mock:
- no caso de _mock_ para requisição de registro do formulário, enviando requisições POST para o endpoint /usuarios: `npm start`
- no caso de _mock_ para requisição dos dados registrados, enviando requisições GET para o endpoint /usuarios/:__id_usuario__: `npm run mock:get`

## Proposta de construção

![base ui wireframe](wireframe/residencia_cesar2-v3-3.png)