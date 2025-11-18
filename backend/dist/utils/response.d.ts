import { Response } from 'express';
export declare class ResponseHandler {
    static success<T>(res: Response, data: T, message?: string, statusCode?: number): Response;
    static error(res: Response, message?: string, statusCode?: number, error?: string): Response;
    static notFound(res: Response, message?: string): Response;
    static badRequest(res: Response, message?: string): Response;
    static unauthorized(res: Response, message?: string): Response;
    static forbidden(res: Response, message?: string): Response;
}
//# sourceMappingURL=response.d.ts.map