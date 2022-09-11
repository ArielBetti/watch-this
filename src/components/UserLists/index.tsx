import { FC } from "react";
import { Heading, Paragraph, Stacker } from "webetti-react-sdk";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// atoms: components
import * as Atom from "./atoms";
import CardList from "../CardList";
import CreateList from "../CreateList";

// types
import { IUserListProps } from "./types";
import { IEndpointUserLists } from "../../api/types";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme/types";

// ::
const UserLists: FC<IUserListProps> = ({ error, lists, loading }) => {
  const theme: ITheme = useTheme();

  return (
    <>
      <Heading variant="heading-5">Suas listas</Heading>
      <Stacker top="sm">
        <CreateList />
      </Stacker>
      {error && <Paragraph>Em breve tratamento para erro</Paragraph>}
      {loading && (
        <Stacker all="sm">
          <SkeletonTheme
            baseColor={theme?.colors?.neutral?.pure}
            highlightColor={theme?.colors?.neutral?.[1]}
          >
            <Atom.SkeletonContainer>
              <Skeleton count={3} height={133} width={325} />
            </Atom.SkeletonContainer>
          </SkeletonTheme>
        </Stacker>
      )}
      {lists.length > 0 && (
        <Stacker all="sm">
          <Atom.UserListsSection>
            {lists?.map((item: IEndpointUserLists) => (
              <CardList key={item?.id} list={item?.list} title={item?.title} />
            ))}
          </Atom.UserListsSection>
        </Stacker>
      )}
    </>
  );
};

export default UserLists;
