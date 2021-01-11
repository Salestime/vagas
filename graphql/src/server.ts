import "reflect-metadata";
import './utils/connection'
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import UserResolver from "./graphql/users/UserResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, () => console.log('Running on port 4100'));
}

bootstrap();