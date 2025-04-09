# Projeto Prático de Implementação Front-End


## Dados de Inscrição
- Nome: Giovanni Lauro Corrêa Ramos
- E-mail: giovanni.somar1@gmail.com
- Número de inscrição: 8277 - DESENVOLVEDOR FRONT-END - SÊNIOR
- Número de inscrição: 9705 - DESENVOLVEDOR FRONT-END - PLENO


### Sobre o Projeto

Este projeto foi desenvolvido sendo uma aplicação SPA com carregamento lento (lazy loading) de módulos.

Foram aplicadas conceitos de UI/UX design para tornar a experiência do usuário muito mais fluída e intuitiva durante toda a navegação, e a página principal fornece acesso direto ao serviço de consulta de pessoas desaparecidas, consumindo os endpoints do **ABITUS API REST**, disponibilizados pela Polícia Judiciária Civil de Mato Grosso no seguinte link swagger: https://abitus-api.geia.vip/swagger-ui/index.html. 


---


### 📋 Tecnologias Utilizadas

- **Angular** - Framework de desenvolvimento front-end de aplicações web dinâmicas e interativas
- **Tailwind** - Framework CSS de estilização de componentes
- **SASS** (Sassy CSS) - Pré-processamento de CSS
- **Docker** - Plataforma de conteinerização da aplicação


---


### 📦 Como Instalar


#### 📌 Clonando o repositório

```bash
git clone https://github.com/giovanniramos/projetofront.git
cd projetofront
```


---


### 🚀 Como Executar (Em contêiner Docker)


#### 📌 Requisitos

Instale o [Docker Desktop](https://www.docker.com/) para empacotar e rodar a aplicação.


#### 📊 Testando a aplicação

- Execute os comandos a seguir:
  > ```docker build -t seplag-spa .```
  
  > ```docker run -p 3000:3000 seplag-spa```

- Ou se preferir via Docker Compose:
  > ```docker compose up --build```
  
- Em seguida, acesse seu navegador em:
  [http://localhost:3000](http://localhost:3000)


---


### 🚀 Como Executar (Em ambiente Local)


#### 📌 Pré-requisitos

Instale o gerenciador de versões [nvm](https://github.com/nvm-sh/nvm/) para instalar o [node.js](https://nodejs.org/en/) e o npm.

NVM é um gerenciador projetado para ser instalado por usuário e invocado por shell. Funciona em qualquer shell compatível com POSIX (sh, dash, ksh, zsh, bash).

Para **instalar** ou **atualizar** o nvm, você deve executar o script de instalação. Para fazer isso, você pode baixar e executar o script manualmente ou usar o comando abaixo **cURL** ou **Wget** com [GitBash](https://gitforwindows.org/) ou [Cygwin](https://cygwin.com). Caso contrário, para Windows, existe uma alternativa usando o instalador [nvm-windows](https://github.com/coreybutler/nvm-windows).

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```


#### 📌 Requisitos

No diretório do projeto abra o Prompt de Comando e rode os comandos abaixo: 

* Instalando o Node.js (versão 14.21.3 ou superior):
  > ```nvm install 14.21.3```

* Instalando o projeto e suas dependências:
  > ```npm install```


#### 📊 Testando em ambiente local

- Execute `ng serve` para iniciar um servidor local e navegue até: 
  [http://localhost:4200](http://localhost:4200)


