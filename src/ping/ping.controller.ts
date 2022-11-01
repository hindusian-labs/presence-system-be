import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import prisma from "../core/prisma";
import { createResponseBody, StatusType } from "../core/response";

async function ping(_req: Request, res: Response, next: NextFunction) {
  try {
    await prisma.$queryRaw`SELECT 1`;
    const data = createResponseBody(StatusType.Success, { time: Date() });

    res.status(StatusCodes.OK);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export default ping;
