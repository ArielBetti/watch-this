import { IEndpointUserLists } from "../../api/types";

export interface IUserListProps {
  lists: IEndpointUserLists[];
  loading: boolean;
  error: boolean;
}
