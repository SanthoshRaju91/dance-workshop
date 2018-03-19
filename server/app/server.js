import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';
import middleware from './middleware';
import { connect } from './db';

const app = express();
const env = process.env.NODE_ENV || 'development';
const envPossibles = ['prod', 'production'];

// configuring application middleware and connecting to mongoDB
middleware(app);
connect();

if(envPossibles.indexOf(env) < 0 ) {
    app.use('/docs', graphiqlExpress({ endpointURL: '/graphql'}));    
}

// match any unrecognized patterns.
app.all('*', (req, res) => {
    res.json({
        ok: true
    });
});

// global error handler
app.use((err, req, res, next) => {
    if(err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
});

export default app;