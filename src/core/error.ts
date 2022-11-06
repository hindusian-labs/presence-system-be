/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createResponseBody, StatusType } from "./response";

async function error(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const data: Error = {
    name: err.name,
    message: err.message,
  };

  const body = createResponseBody(StatusType.Error, data);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  res.json(body);
}

export class AlreadyCheckedOut extends Error {
  constructor() {
    super();
    this.message = "User already checked out.";
  }
}

export class CheckedOutOnDifferentDay extends Error {
  constructor() {
    super();
    this.message = "User checked out no different day.";
  }
}

export default error;
