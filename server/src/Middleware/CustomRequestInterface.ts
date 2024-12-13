import { Request as ExpressRequest } from "express";
export interface CustomRequest extends ExpressRequest {
    user?: string;
    roles?: string[];
    userId?: string;
    headers: {
        authorization?: string;  
        Authorization?: string;
      };
}