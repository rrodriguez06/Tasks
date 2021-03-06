import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  due: Date | null;
  id: string;
  name: string | null;
  status?: "ToDo" | "Done" | null;
  updatedAt: Date;
  user?: User | null;
};
