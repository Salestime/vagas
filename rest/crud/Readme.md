## 📕 About

Projeto CRUD de usuarios usando AdonisJS 5.0.  

## 💻 Installation

### Docker

Com docker hub instalado, segue os comandos:

```sh

$ docker run --name nometeste -e POSTGRES_PASSWORD=nometeste -p 5432:5432 -d postgres

$ docker start nometeste

```

### Banco Postgres

* Baixe ferramenta de gerenciamento de banco de dados e coloque dados conforme criado no docker,
exemplo abaixo com Beekeeper studio seguindo com a instrução acima:

<img src="https://i.imgur.com/w5ZEpWU.jpg">

### Dependencias

```sh

$ npm install

```

### Conexão banco PostGres

Dados do banco no arquivo .env

```sh
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=pDNWsseSfOLLfVbUaUwh6_EJ3RSVdXiK
DB_CONNECTION=pg
PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER=<nometeste>
PG_PASSWORD=<nometeste>
PG_DB_NAME=<nome_banco_criado>

```

### Compilar projeto 🙂

```sh

$ node ace serve --watch

```

### Rotas 🛣

* Index - http://localhost:3333/users
```sh
{
  No Body
}
```

* Create - http://localhost:3333/users

```sh
{
	"name": "Will",
	"address": "Rua alvorada",
	"city": "Umuarama",
	"phone": "44997548686"
}

```

* Update - http://localhost:3333/users/:id

```sh
{
	"name": "Will2",
	"address": "Rua alvorada2",
	"city": "Umuarama2",
	"phone": "44997548686"
}

```

* Delete - Deletar usuario

```sh
{
  No Body
}
```

## ⚡ Techs

* Node
* AdoniJS 5.0

