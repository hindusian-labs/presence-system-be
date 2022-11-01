import { UserStoreRequest, UserModifyRequest } from "./user.model";
import prisma from "../core/prisma";
import { User } from "@prisma/client";

export async function store(payload: UserStoreRequest): Promise<User> {
  const user = await prisma.user.create({
    data: {
      uid: payload.uid,
      name: payload.name,
    },
  });

  return user;
}

export async function fetch(uid: string): Promise<User> {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      uid: uid,
    },
  });

  return user;
}

export async function fetchAll(): Promise<User[]> {
  const user = await prisma.user.findMany();

  return user;
}

export async function modify(
  uid: string,
  payload: UserModifyRequest
): Promise<User> {
  const user = await prisma.user.update({
    data: {
      name: payload.name,
    },
    where: {
      uid: uid,
    },
  });

  return user;
}

export async function drop(uid: string): Promise<User> {
  const user = await prisma.user.delete({
    where: {
      uid: uid,
    },
  });

  return user;
}
