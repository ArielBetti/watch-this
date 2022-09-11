import { FC } from "react";
import { Heading, Stacker } from "webetti-react-sdk";

// atoms: components
import * as Atom from "./atoms";
import CardList from "../CardList";
import CreateList from "../CreateList";

// types
import { IUserListProps } from "./types";
import { IEndpointUserLists } from "../../api/types";

// ::
const UserLists: FC<IUserListProps> = ({ error, lists, loading }) => {
  return (
    <div>
      <Heading variant="heading-5">Suas listas</Heading>
      <Stacker top="sm">
        <CreateList />
      </Stacker>
      <Stacker all="sm">
        <Atom.UserListsSection>
          {lists?.map((item: IEndpointUserLists) => (
            <CardList key={item?.id} list={item?.list} title={item?.title} />
          ))}
        </Atom.UserListsSection>
      </Stacker>
    </div>
  );
};

export default UserLists;
