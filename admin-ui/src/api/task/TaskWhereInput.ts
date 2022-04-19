import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  due?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
