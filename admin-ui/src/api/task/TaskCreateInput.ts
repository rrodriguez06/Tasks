import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  due?: Date | null;
  name?: string | null;
  status?: "ToDo" | "Done" | null;
  user?: UserWhereUniqueInput | null;
};
