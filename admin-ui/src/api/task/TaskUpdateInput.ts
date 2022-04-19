import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  due?: Date | null;
  name?: string | null;
  status?: "ToDo" | "Done" | null;
  user?: UserWhereUniqueInput | null;
};
