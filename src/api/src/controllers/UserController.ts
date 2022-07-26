import * as userService from "../services/UserService";

import { Request, Response } from "express";
import { processError } from "../util/errors/ProcessError";
//
export const getAllUsers = async (req: Request, res: Response) => {
    try{
        const result = await userService.getAllUsers();
        
        res.send(result);
    } catch(error){
        processError(error, res);
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try{
        const result = await userService.getUserById(req.params.id);
        
        res.send(result);
    } catch(error){
        processError(error, res);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try{
        const result = await userService.createUser(req.body);
        
        res.send(result);
    } catch(error){
        processError(error, res);
    }
}