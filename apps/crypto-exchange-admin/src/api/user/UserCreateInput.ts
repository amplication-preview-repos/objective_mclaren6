import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
