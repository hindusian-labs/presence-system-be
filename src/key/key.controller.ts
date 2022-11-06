import { NextFunction, Request, Response } from "express";
import { verifyKey, generate } from "./key.service";
import { createResponseBody, StatusType } from "../core/response";
import { StatusCodes } from "http-status-codes";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prismaErrorBuilder } from "../core/prisma";

async function key(req: Request, res: Response, next: NextFunction) {
  const key = req.headers["x-api-key"];

  if (typeof key === "string") {
    if (await verifyKey(key)) {
      next();
    } else {
      const data = {
        message: "Invalid API key",
      };

      const body = createResponseBody(StatusType.Fail, data);
      return res.status(StatusCodes.UNAUTHORIZED).json(body);
    }
  } else {
    const data = {
      message: "API key not provided",
    };

    const body = createResponseBody(StatusType.Fail, data);
    return res.status(StatusCodes.UNAUTHORIZED).json(body);
  }
}

export async function keygen(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await generate();
    const body = createResponseBody(StatusType.Success, data);
    return res.status(StatusCodes.CREATED).json(body);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const data = prismaErrorBuilder(error);
      const body = createResponseBody(StatusType.Fail, data);

      res.status(StatusCodes.UNPROCESSABLE_ENTITY);
      res.json(body);
      return;
    }

    next(error);
  }
}
export default key;
