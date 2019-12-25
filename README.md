# Aplicação desenvolvida para VAGA Frontend na Fractal

### Libs utilizadas

- Redux
- Redux-Saga
- React-router-dom
- Connected-router
- Styled-components
- Axios
- Webpack
- Prettier
- Eslint

### Como acessar o deploy

[Fractal React - Clique para acessar](https://fractal-react.web.app/)
https://fractal-react.web.app/

###

### Bônus

- Utilizado lib para rotas
- Axios para requisições HTTP
- Implementação de deploy
- Eslint com style-guide Airbnb
- Utilização do **REACTOTRON** para visualização das chamadas as actions do redux e das chamadas a API utilizando redux-saga

### Gerenciador de dependências

Foi utilizado o **yarn** para gerenciar as dependências.

### Detalhes e observações

    O projeto foi desenvolvido em um macbook, pode ser que haja algum possível erro caso seja executado em ambientes com Windows.

    Acabei vendo o email uns dias após o recebimento pois não uso muito o meu email do iCloud, comecei fazer o teste hoje mesmo dia 24-12-2019. Como tive somente hoje para fazer o teste o fiz com o básico: webpack, babel, eslint, editorconfig, redux, redux-saga e também fiz o deploy no firebase hosting.

    Caso tivesse tido mais um tempo de antecedência pelo menos eu teria aplicado testes unitários e de integração com Jest e também teria feito o code coverage

### Como iniciar o projeto

```bash
yarn install
yarn dev
```

- **"yarn dev"** script para ser usado no shell que é o que roda a aplicação na porta 8080 localmente
- **"yarn build"** script para fazer o build da aplicação com a saída na pasta public/bundle.js já minificado para produção
