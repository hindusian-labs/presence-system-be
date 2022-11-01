import { NextFunction, Request, Response } from "express";
import ajv from "../core/ajv";
import { UserModifyRequest, UserStoreRequest } from "./user.model";
import {
  SchemaUserModifyRequest,
  SchemaUserStoreRequest,
} from "./user.validation";
import * as service from "./user.service";
import { createResponseBody, StatusType } from "../core/response";
import { StatusCodes } from "http-status-codes";
import {
  NotFoundError,
  PrismaClientKnownRequestError,
} from "@prisma/client/runtime";
import { prismaErrorBuilder } from "../core/prisma";
import { betterAjvErrors } from "@apideck/better-ajv-errors";

export async function store(req: Request, res: Response, next: NextFunction) {
  const validateBody = ajv.compile<UserStoreRequest>(SchemaUserStoreRequest);
  const reqBody = req.body;
  const validation = validateBody(reqBody);

  if (validation) {
    try {
      const data = await service.store(reqBody);
      const body = createResponseBody(StatusType.Success, data);

      res.status(StatusCodes.CREATED);
      res.json(body);
      return;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const data = prismaErrorBuilder(error);
        const body = createResponseBody(StatusType.Fail, data);

        res.status(StatusCodes.UNPROCESSABLE_ENTITY);
        res.json(body);
        return;
      }

      next(error);
      return;
    }
  }

  const data = betterAjvErrors({
    data: reqBody,
    errors: validateBody.errors,
    schema: SchemaUserStoreRequest as never,
  });

  const body = createResponseBody(StatusType.Fail, data);
  res.status(StatusCodes.BAD_REQUEST);
  res.json(body);
}

export async function fetch(req: Request, res: Response, next: NextFunction) {
  const uid = String(req.params.uid);

  try {
    const user = await service.fetch(uid);
    const body = createResponseBody(StatusType.Success, user);

    res.status(StatusCodes.OK);
    res.json(body);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError ||
      error instanceof NotFoundError
    ) {
      const data = prismaErrorBuilder(error);
      const body = createResponseBody(StatusType.Fail, data);

      res.status(StatusCodes.NOT_FOUND);
      res.json(body);
      return;
    }

    next(error);
  }
}

export async function fetchAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await service.fetchAll();
    const body = createResponseBody(StatusType.Success, users);

    res.status(StatusCodes.OK);
    res.json(body);
  } catch (error) {
    next(error);
  }
}

export async function modify(req: Request, res: Response, next: NextFunction) {
  const uid = String(req.params.uid);
  const validateBody = ajv.compile<UserModifyRequest>(SchemaUserModifyRequest);
  const reqBody = req.body;
  const validation = validateBody(reqBody);

  if (validation) {
    try {
      const data = await service.modify(uid, reqBody);
      const body = createResponseBody(StatusType.Success, data);

      res.status(StatusCodes.CREATED);
      res.json(body);
      return;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        const data = prismaErrorBuilder(error);
        const body = createResponseBody(StatusType.Fail, data);

        res.status(StatusCodes.UNPROCESSABLE_ENTITY);
        res.json(body);
        return;
      }

      next(error);
      return;
    }
  }

  const data = betterAjvErrors({
    data: reqBody,
    errors: validateBody.errors,
    schema: SchemaUserModifyRequest as never,
  });

  const body = createResponseBody(StatusType.Fail, data);
  res.status(StatusCodes.BAD_REQUEST);
  res.json(body);
}

export async function drop(req: Request, res: Response, next: NextFunction) {
  const uid = String(req.params.uid);

  try {
    const user = await service.drop(uid);
    const body = createResponseBody(StatusType.Success, user);

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

    next(error);
  }
}
