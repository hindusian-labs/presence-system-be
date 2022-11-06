import { Check } from "@prisma/client";
import prisma from "../core/prisma";
import { CheckResponse, checkResponseBuilder } from "./check.model";

export async function check(id: string, date: Date): Promise<CheckResponse> {
  const check = await store(id, date);
  return checkResponseBuilder(check);
}

export async function fetch(id: string, date: Date): Promise<Check | null> {
  const check = await prisma.check.findUnique({
    where: {
      userId_date: {
        date: date,
        userId: id,
      },
    },
  });

  return check;
}

export async function store(id: string, date: Date): Promise<Check> {
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

  const check = await prisma.check.create({
    data: {
      userId: id,
      in: dateTime,
      date: dateOnly,
    },
  });

  return check;
}

export async function fetchAll(): Promise<CheckResponse[]> {
  const checkes = await prisma.check.findMany();

  return checkes.map((check: Check) => checkResponseBuilder(check));
}
