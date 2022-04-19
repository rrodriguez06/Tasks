import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  due?: Date | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
