import merge from 'lodash.merge';

const env  = process.env.NODE_ENV;

const baseConfig = {
    port: 3000,
    secrets: {},
    db: {
        url: 'mongodb://localhost:27017/dance'
    }
};

let envConfig = {};

switch(env) {
    case 'development': 
    case 'dev':
        envConfig = require('./dev').config;
        break;
    case 'test':
    case 'testing':
        envConfig = require('./testing').config;
        break;
    case 'prod':
    case 'production':
        envConfig = require('./prod').config;
        break;
    default:
        envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);