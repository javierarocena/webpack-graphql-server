import * as express from "express";
import * as bodyParser from "body-parser";
import { apolloExpress, graphiqlExpress } from "apollo-server";
import { Schema } from "./schema";
import * as cors from "cors";
import * as helmet from "helmet";

// Either to export GraphiQL (Debug Interface) or not.
const EXPORT_GRAPHIQL = process.env.NODE_ENV !== "production" || true;
// Default port or given one.
const PORT = process.env.PORT || 3000;
// Enable cors (cross-origin HTTP request) or not.
const ENABLE_CORS = process.env.NODE_ENV !== "production" || true;

const GRAPHQL_ROUTE = "/graphql";
const GRAPHIQL_ROUTE = "/graphiql";

let app = express();
app.use(helmet());
if ( true === ENABLE_CORS ) {
    app.use(GRAPHQL_ROUTE, cors());
}

app.use(GRAPHQL_ROUTE, bodyParser.json(), apolloExpress({
    schema: Schema,
}));
if ( true === EXPORT_GRAPHIQL ) {
    app.use(GRAPHIQL_ROUTE, graphiqlExpress({
        endpointURL: GRAPHQL_ROUTE,
    }));
}
app.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}${GRAPHQL_ROUTE}`);
    if ( true === EXPORT_GRAPHIQL ) {
        console.log(`GraphiQL Server is now running on http://localhost:${PORT}${GRAPHIQL_ROUTE}`);
    }
});
