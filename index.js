import { ApolloServer } from "apollo-server";
import { gql } from "graphql-tag";
import { Mongoose } from "mongoose";
import { MONGODB } from './config';



const server = new ApolloServer({
    typeDefs,
    resolvers
});

Mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    return server.listen({ port: 5000 });
}).then((res) => {
    console.log(`server running on port${res.url}`);
});

