import { Request, Response, Router } from 'express'
import { operationRouter } from './operations.router';

export const router = Router();

router.get("/", (req: Request, res: Response)=>{
    res.send("prueba")
})

router.use('/operations', operationRouter);
