import { UserGroupDTO } from "generated/models/UserGroupDTO";
import { ApiResponse } from "../types";

export type IUserGroupState = {
  groupList: ApiResponse<Array<UserGroupDTO>>;
  currentGroup: ApiResponse<UserGroupDTO>;
  create: ApiResponse<UserGroupDTO>;
  update: ApiResponse<UserGroupDTO>;
  delete: ApiResponse<void>;
  setPermission: ApiResponse<void>;
};
