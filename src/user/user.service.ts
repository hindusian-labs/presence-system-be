import { UserStoreRequest, UserModifyRequest } from "./user.model";
import prisma from "../core/prisma";
import { User } from "@prisma/client";

export async function store(payload: UserStoreRequest): Promise<User> {
  const user = await prisma.user.create({
    data: {
      id: payload.id,
      name: payload.name,
    },
  });

  return user;
}

export async function fetch(id: string): Promise<User> {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  return user;
}

export async function fetchAll(): Promise<User[]> {
  const user = await prisma.user.findMany();

  return user;
}

export async function modify(
  id: string,
  payload: UserModifyRequest
): Promise<User> {
  const user = await prisma.user.update({
    data: {
      name: payload.name,
    },
    where: {
      id: id,
    },
  });

  return user;
}

export async function drop(id: string): Promise<User> {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return user;
}
