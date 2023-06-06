import express from 'express';
import cors from 'cors';


class App {
  constructor(){
    this.server = express();
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(cors);
  }

  
}

export default new App().server;