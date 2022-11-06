import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { renderMarkdownDocs } from "./docs.service";

export async function docs(req: Request, res: Response) {
  const docs = renderMarkdownDocs();

  return res
    .setHeader("Content-Type", "text/html")
    .status(StatusCodes.OK)
    .send(docs);
}
