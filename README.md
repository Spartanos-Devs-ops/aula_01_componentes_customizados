# aula 01 componentes customizados

## Configuração inicial

esse comando inicializa um template base para o projeto, certifique-se se a CLI da vtex esteja instalada na sua maquina com o comando `vtex --version`, caso contrário instale usando o comando `npm install -g vtex`.

Mais informações da CLI nesse [link](https://vtex.io/docs/recipes/development/vtex-io-cli-installation-and-command-reference/)

## Terminal

- no terminal rode o comando: `vtex init`
- selecione o template: `store`

com as configurações anteriores feitas vá para o arquivo `manifest.json` que se encontra na raiz do projeto

## manifest

esse arquivo irá conter todos os dados do nosso app.

- vendor: nome da conta;
- name: nome do app criado;
- builders:
  - store: api de blocks do vtex io
  - styles: api de estilos do vtex io
- dependencies: aqui ficam as nossas dependencies do vtex io, para cada dependência temos um outro app, voce pode verificar isso no github do [vtex apps](https://github.com/vtex-apps)

- para cada builder temos uma pasta vinculada na raiz do nosso projeto. exemplo: para o builder store temos uma pasta com o mesmo nome chamda store.

## Builder do React

Para usar o framework react em nosso projero primeiro devemos adicionar a versão `"react": "3.x"` na lista de builders no nosso arquivo `manifest.json`, exemplo:

```JSON

"builders": {
    "styles": "2.x",
    "store": "0.x",
    "docs": "0.x",
    "react": "3.x"
  },
```

- feito isso vamos precisar criar uma pasta na raiz do nosso projeto chamada react, vá para dentro da pasta react com o comando `cd` e rode os seguintes comandos:

- `yarn init -y`
- `yarn add react`
- `yarn add @types/node @types/react -D`

volte para pasta raiz com o comando `cd ..`

## Configuração do huskey, es-lint e prettier.

essa configuração irá nos ajudar a manter um bom padrão de codigo do nosso projeto, fazendo verificações e identações.

- huskey: verificação do nosso codigo antes de cada `commit` chamdo de `pre commit`, [huskey](https://www.npmjs.com/package/husky)
- es-lint: irá verificar se existem divergencias dentro no codigo. [es-lint](https://eslint.org/docs/user-guide/getting-started)
- prettier: irá identar nosso codigo de acordo com o arquivo de configuração chamado `.prettierrc`. [prettier](https://prettier.io/docs/en/index.html)

para que essa configuração aconteça, rode o comando vtex setup na raiz do nosso projeto.
Esse comando irá configurar todos os nosso arquivos citados acima.

## Interfaces

O nosso arquivo `interfaces.json` é a 'porta de entrada' dos nosso componentes customizados.

Para cada interface devemos ter um componente declarado

exemplo:

```JSON

    {
        "text-custom": {
            "component": "TextCustom"
        }
    }

```

Esse é um exemplo básico de como declarar um novo componente,

## Pastar React

Já que acima nos declaramos uma interface `text-custom` que recebe como componente um `TextCustom`, precisamos criar esse arquivo na raiz da pasta react

Feito isso vamos há algumas configurações dentro desta pasta:

tsconfig.json: onde irá ficar as 'normas' da compilação do nosso React
Nesse arquivo vc precisar colocar as seguintes informações:

```JSON
{
  "compilerOptions": {
    "alwaysStrict": true,
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["es2017", "dom", "es2018.promise"],
    "module": "esnext",
    "moduleResolution": "node",
    "noImplicitAny": false,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "target": "es2017",
    "typeRoots": ["node_modules/@types"],
    "types": ["node", "react"],
    "allowJs": true,
    "checkJs": true
  },
  "exclude": ["node_modules"],
  "include": ["./typings/*.d.ts", "./**/*.tsx", "./**/*.ts"],
  "typeAcquisition": {
    "enable": false
  }
}

```

### Components

Para melhor separação do nosso codigo, é uma boa pratica criar uma pasta components dentro da pasta react 

para cada componente desenvolvido devemos criar uma pasta de mesmo nome do arquivo.

Devemos deixar separado dentro da pasta components.