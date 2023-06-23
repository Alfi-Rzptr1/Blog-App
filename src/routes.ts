import { Application, Request, Response } from 'express';

function routes(app: Application): void{

  app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.all('*', (req: Request, res: Response ) => {
    res.sendStatus(404);
  });

}

export default routes;