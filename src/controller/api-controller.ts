
import express, { Router, Request, Response } from 'express'

export class ApiController {

  router: Router;

  constructor() {
    this.router = express.Router();
    this.initRouter();
  }

  initRouter() {
    // this.router.get('/', (request, response) => {
    //   response.send('Hello world!^^');
    // });
    this.router.get('/', this.LoginApi);

  }


  // controller
  LoginApi(request: Request, response: Response, next: express.NextFunction) {
    response.send('{"a":"login-api"}');
  }

}