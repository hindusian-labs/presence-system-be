import { Check } from "@prisma/client";
import { AlreadyCheckedOut } from "../core/error";
import prisma from "../core/prisma";
import { CheckResponse, checkResponseBuilder } from "./check.model";

export async function check(id: string, date: Date): Promise<CheckResponse> {
  const dateOnly: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );

  const dateTime: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );

  const exist = await prisma.check.findFirst({
    where: {
      userId: id,
      date: dateOnly,
      NOT: {
        out: null,
      },
    },
  });

  if (exist) {
    throw new AlreadyCheckedOut();
  }

  const check = await prisma.check.upsert({
    where: {
      userId_date: {
        date: dateOnly,
        userId: id,
      },
    },
    create: {
      userId: id,
      in: dateTime,
      date: dateOnly,
    },
    update: {
      out: dateTime,
    },
  });

  return checkResponseBuilder(check);
}

export async function fetchAll(): Promise<CheckResponse[]> {
  const checkes = await prisma.check.findMany();

  return checkes.map((check: Check) => checkResponseBuilder(check));
}
