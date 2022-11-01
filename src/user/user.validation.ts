import { JSONSchemaType } from "ajv";
import { UserModifyRequest, UserStoreRequest } from "../user/user.model";

export const SchemaUserStoreRequest: JSONSchemaType<UserStoreRequest> = {
  type: "object",
  properties: {
    uid: { type: "string", maxLength: 10 },
    name: { type: "string", maxLength: 255 },
  },
  required: ["name", "uid"],
};

export const SchemaUserModifyRequest: JSONSchemaType<UserModifyRequest> = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 255 },
  },
  required: ["name"],
};
