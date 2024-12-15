import { Request as ExpressRequest } from "express";
export interface CustomRequest extends ExpressRequest {
    user?: string;
    userId?: number;
    headers: {
        authorization?: string;  
        Authorization?: string;
      };
}