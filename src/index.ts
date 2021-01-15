import 'reflect-metadata'; //to use decoratorsTS
import { ApolloServer } from 'apollo-server'; //build and run graphQL server
import { createConnection } from 'typeorm'; //connection database
import { buildSchema } from 'type-graphql'; // to build the schema
import { UserResolver } from './resolvers/user_resolver';



async function runServer() {
    await createConnection()
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    const server = new ApolloServer({ schema });
    await server.listen(8050);

    console.log('[Server]: Started at port ::8050');
    
}

runServer();