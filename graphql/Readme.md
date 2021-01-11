## 📕 About

Projeto CRUD de usuarios usando biblioteca TypeGraphQL.  

## 💻 Installation & play

### Conexão com MongoDB

* Cria conta no site e um cluster no [mongo]
* Na Sandbox do Cluster vai em *Connect -> Connect your application -> Copia código uri exibida na tela*
* No arquivo *connection.ts* coloque o código como string alterando os parametros com <b>usuario</b>, <b>senha</b> e <b>nome do banco</b> conforme foi criado no site.</br>
<b>obs</b>: Você pode usar nome de banco *test* por padrão caso não houver um criado.

```sh
moongose.connect('mongodb+srv://<usuario>:<senha_usuario>@cluster0.btnxp.mongodb.net/test?retryWrites=true&w=majority',...);
```

### Instala dependencias & run

```sh
$ npm install
$ npm server
```

### No painel do GraphQL na porta 4100

* Query - Busca de usuarios

```sh
query {
  users {
    _id,
    name,
    Address,
    city,
    phone
  }
}
```

* Mutation - Adicionar usuarios

```sh
mutation {
  createUser(userInput: {
    name: "Will",  
    Address: "Rua Alvorada",
    city: "Umuarama",  
    phone: "449753545",
  }) {
    _id
  }
}
```

* Mutation - Alterar usuario

```sh
mutation {
  updateUser(
    _id: "<_id>",
    userInput: {
      name: "Will2",  
      Address: "Rua Alvorada2",
      city: "Umuarama",  
      phone: "449753545",
  }) {
    name,
    Address,
    city,
    phone
  }
}

```

* Mutation - Deletar usuario

```sh
mutation {
  deleteUser(
    _id: "<_id>"
  )
}
```

## ⚡ Techs

* Node
* GraphQL
* TypeGraphQL
* ApolloServer
* mongoose

[mongo]: <https://cloud.mongodb.com/>
