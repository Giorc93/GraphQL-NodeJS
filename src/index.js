import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

//Import connection to DB
import { connect } from "./database";

const app = express();
connect();

app.get("/", (req, res) => {
  res.json({
    message: "Hi there...",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
      messageId: "Test",
    },
  })
);

app.listen(3000, () => console.log("Server running on port 3000"));
