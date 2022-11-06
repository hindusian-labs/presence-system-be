import { NextFunction, Request, Response } from "express";
import * as userService from "../user/user.service";
import * as checkService from "../check/check.service";
import { StatusCodes } from "http-status-codes";
import { createResponseBody, StatusType } from "../core/response";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prismaErrorBuilder } from "../core/prisma";
import { AlreadyCheckedOut } from "../core/error";

export async function check(req: Request, res: Response, next: NextFunction) {
  const id = String(req.params.id);

  try {
    const user = await userService.fetch(id);
    const check = await checkService.check(user.id, new Date());
    const body = createResponseBody(StatusType.Success, check);

    res.status(StatusCodes.OK);
    res.json(body);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const data = prismaErrorBuilder(error);
      const body = createResponseBody(StatusType.Fail, data);

      res.status(StatusCodes.UNPROCESSABLE_ENTITY);
      res.json(body);
      return;
    }

    if (error instanceof AlreadyCheckedOut) {
      const body = createResponseBody(StatusType.Fail, error.message);
      console.log(body);

      res.status(StatusCodes.UNPROCESSABLE_ENTITY);
      res.json(body);
      return;
    }

    next(error);
    return;
  }
}

export async function fetchAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const checkes = await checkService.fetchAll();
    const body = createResponseBody(StatusType.Success, checkes);

    res.status(StatusCodes.OK);
    res.json(body);
  } catch (error) {
    next(error);
  }
}
