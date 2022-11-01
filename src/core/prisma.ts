import { PrismaClient } from "@prisma/client";
import {
  NotFoundError,
  PrismaClientKnownRequestError,
} from "@prisma/client/runtime";

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

type MinimalPrismaError = {
  name: string;
  code?: string;
  message: string;
  cause?: unknown;
  meta?: unknown;
};

export function prismaErrorBuilder(
  error: PrismaClientKnownRequestError | NotFoundError
): MinimalPrismaError {
  if (error instanceof PrismaClientKnownRequestError) {
    return {
      name: error.name,
      code: error.code,
      message: error.message,
      cause: error.cause,
      meta: error.meta,
    };
  } else {
    return {
      name: error.name,
      message: error.message,
      cause: error.cause,
    };
  }
}

export default prisma;
