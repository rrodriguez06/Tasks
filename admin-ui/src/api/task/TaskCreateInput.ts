import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  due?: Date | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
