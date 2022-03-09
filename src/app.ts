import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { ApiController } from './controller/api-controller'

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

function loggerMiddleware(request: express.Request, response: express.Response, next: express.NextFunction) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();


app.use((request: Request, response: Response, next: express.NextFunction) => {
  response.setHeader("Content-type", "application/json; charset=utf-8");
  next();
});


// init middleware
app.use(loggerMiddleware);
app.use(bodyParser.json());


// const api = new ApiController;
// app.use('', api.router);

app.use('', (new ApiController).router);


// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  app.listen(port, () => console.log(`> Listening on port ${port}`));
})();