# CRUD with GraphQL and Typescript

### Requirements

- Typescript
- NodeJS 12.X.X
- Npm or Yarn

### How to Run

First you need to install de packages running:

```js
npm install or yarn install
```

Then you can run using command:
```js
npm start or yarn start
```


### Dependencies 
```json
    "dependencies": {
        "apollo-server": "2.12.0",
        "graphql": "14.1.1",
        "reflect-metadata": "0.1.13",
        "sqlite3": "4.2.0",
        "type-graphql": "0.17.6",
        "typeorm": "0.2.24",
        "typeorm-encrypted": "0.5.4"
    },
    "devDependencies": {
        "nodemon": "2.0.3",
        "ts-node": "8.9.1",
        "typescript": "3.8.3"
    }
```

### A short description of these tools

- Apollo server is used to build and run the GraphQL server
- Reflect-metadata allows to us to use TypeScript decorators
- SQLite will be our database
- Type GraphQL helps us create schema from model classes
- TypeORM enables the interaction with our SQLite database
- TypeORM Encrypted enables the use of encryption in the password field

### Folders estructure

- Inputs – this folder contains project’s logic - defines what user can put into objects
- Models – keeps database entities
- Resolvers – keeps resolver functions
- index.ts – is the entry point of our application


## Queries

### users

- Get all users in database and and returns the specified datas, example ;

```js
    query {
        getUsers {
            id
            email
            lastName
        }
    }
```

### user

- Get one user passing the ID, example:

```js
    query {
        getUser(id: "1") {
            id
            firstName
            lastName
        }
    }
```

## Mutations

### createUser

- Create a new user passing some datas, example :
```js
    mutation {
        createUser(data: {
            firstName: "Jhon",
            lastName: "Doe"
            nickName: "fulano"
            email: "test@test.com"
            password: "mysecretpassword"
        })
        {
            id
            firstName
            lastName
            nickName
            email
            password
        }
    }
```

### updateUser

- Update datas from the user, passing the id ID, and returns the updated data, example: 
```js
    mutation {
        updateUser(id: "4", data: {
            firstName: "user_updated",
        }),
        {
            id
            firstName
            lastName
            nickName
            email
        }
    }
```

### deleteUser

- If user exists in database, will be deleted passing the ID, example:
```js
    mutation {
        deleteUser(id: "1")
    }
```


