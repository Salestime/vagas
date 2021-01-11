import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UserResolver from "./graphql/users/UserResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, () => console.log('Running on port 4100'));
}

bootstrap();