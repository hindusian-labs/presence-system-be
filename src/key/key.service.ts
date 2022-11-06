import { Auth } from "@prisma/client";
import prisma from "../core/prisma";

export async function verifyKey(key: string): Promise<boolean> {
  const exist = await prisma.auth.findFirst({
    where: {
      key: key,
    },
  });

  return exist ? true : false;
}

export async function generate(): Promise<Auth> {
  const auth = await prisma.auth.create({
    data: {},
  });

  return auth;
}
