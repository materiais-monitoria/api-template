# Template de API em Express

Esse projeto é uma API REST em Node, usando Express, MySQL e TypeScript, feito para ser forkado e usado em projetos pessoais.

Teoricamente, está tudo configurado, seja para desenvolvimento ou produção.

## Como usar

Como é um projeto npm, você precisará de node instalado na sua máquina.
O arquivo principal é o `index.ts`, e nele está a API em Express, crie uma pasta para rotas e defina caminhos para a API conforme precisar.

### Instalação

Esse comando irá ler o arquivo `package.json` e instalar todas as dependências necessárias do projeto.
**NÃO FUNCIONARÁ SEM ESSA ETAPA**

```bash
npm install
```

### Configuração

Para configurar o banco de dados, você precisará criar um arquivo .env na raiz do projeto.
As variáveis de ambiente necessárias são:

```bash
DB_HOST="endereço do banco de dados"
DB_PORT=3306
DB_USER="nome de usuário"
DB_PASSWORD="senha do usuário"
DB_DATABASE="nome do banco de dados"
```

Note que são as exatas mesmas informações que usamos para conexão em Spring ou no Workbench.
Se quiser, poderá adicionar variável extra `PORT` você pode mudar a porta que o servidor irá rodar.

> **Nota**: Se você for usar um banco de dados que não seja o da escola, talvez seja necessário incluir a variável `DB_SSL` com o valor `true`. O servidor da escola não precisa disso.

## Scripts

### `npm start`

Compila o projeto e inicia a API.
É o que deve ser usado na produção (ou seja, no servidor oficial).
Útil para scripts de deploy.

### `npm run build`

Irá compilar seu projeto todo para um único arquivo javascript, na pasta `dist/`.

### `npm run exec`

Irá executar o arquivo compilado pelo `npm run build`, que está na pasta `dist/`.
Note que você deve executar o `npm run build` antes de executar esse comando.

### `npm run preview`

Executa seu projeto imediatamente, sem compilar. Útil para testar a API de forma rápida ou verificar se está funcionando.
Como o nome diz, te fornece uma prévia da sua aplicação.

> **Nota**: É mais lento que o `npm start` e não deve ser usado em produção.

### `npm run dev`

Inicia a API sem compilar, e reinicia ela a cada alteração de arquivo.
Permite obter feedback rapidamente durante o desenvolvimento.

Na maior parte do tempo durante o desenvolvimento, você vai estar rodando isso.

### `npm run format`

Formata o código, adicionando espaços, quebras de linha, mudando a indentação, etc.
Permite garantir um estilo de código consistente no projeto todo.

Especialmente útil para grupos que incluam pessoas que não sabem o que é um tab.

### `npm run lint`

Verifica erros e warnings, além de algumas regras de formatação.
É o tipo de coisa que idealmente temos na IDE, mas JavaScript não é uma linguagem de verdade e não tem.

### `npm run lint:fix`

Verifica erros, warnings e algumas regras de formatação e corrige o que consegue.
Útil.


### `npm run fix`

Executa `npm run format` e `npm run lint:fix` juntos.
Rode isso antes de dar push de vez em quando.



