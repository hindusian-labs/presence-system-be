import { Check } from "@prisma/client";
import { AlreadyCheckedOut } from "../core/error";
import prisma from "../core/prisma";

export async function check(uid: string, date: string | Date) {
  const check = await fetch(uid, date);
  console.log(check);
  if (check == null) {
    const check = await store(uid, date);

    return check;
  }

  if (check && check.in == null && check.out == null) {
    check.in = new Date();
    check.out = null;
  } else if (check && check.in != null && check.out == null) {
    check.out = new Date();
  } else {
    throw new AlreadyCheckedOut();
  }

  return await prisma.check.update({
    data: {
      in: check.in,
      out: check.out,
    },
    where: {
      userUid_date: {
        date: check.date,
        userUid: check.userUid,
      },
    },
  });
}

export async function fetch(
  uid: string,
  date: string | Date
): Promise<Check | null> {
  const check = await prisma.check.findUnique({
    where: {
      userUid_date: {
        date: date,
        userUid: uid,
      },
    },
  });

  return check;
}

export async function store(uid: string, date: string | Date): Promise<Check> {
  const check = await prisma.check.create({
    data: {
      userUid: uid,
      in: new Date(),
      date: date,
    },
  });

  return check;
}

export async function fetchAll(): Promise<Check[]> {
  const checkes = await prisma.check.findMany();

  return checkes;
}
