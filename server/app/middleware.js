import bodyParser from 'body-parser';
import cors from 'cors';

const setGlobalMiddleware = app => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
}

export default setGlobalMiddleware;