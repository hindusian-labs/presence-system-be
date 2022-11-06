import { Check } from "@prisma/client";

export interface CheckResponse {
  userId: string;
  in: string;
  out: string | null;
  date: string;
}

export function checkResponseBuilder(check: Check): CheckResponse {
  return {
    userId: check.userId,
    in: check.in.toLocaleTimeString("en-US", {
      timeZone: "Asia/Jakarta",
      hourCycle: "h24",
    }),
    out: check.out
      ? check.out.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hourCycle: "h24",
        })
      : null,
    date: check.date.toLocaleDateString(),
  };
}
