import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isVerified: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
