import { Request, Response, NextFunction } from 'express';


// wrap every enpoint with a try-catch block and by default return status code 500 if 
// any unhandled error happens. If the error is an instance 
//of Error class then the "message" property is sent back 
//otherwise default error message of "Internal server error" is sent.
export const errorHandlerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        next()
    } catch (error: unknown) {
        res.status(500).send(error instanceof Error ? error?.message : 'Internal Server Error')
    }
}