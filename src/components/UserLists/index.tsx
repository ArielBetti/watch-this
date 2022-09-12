import { FC } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import { MdRestartAlt } from "react-icons/md";
import { Button, Heading, Paragraph, Stacker } from "webetti-react-sdk";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// recoil: atoms
import { atomHashUserList } from "../../store/hashs";

// atoms: components
import * as Atom from "./atoms";
import CardList from "../CardList";
import CreateList from "../CreateList";

// types
import { ITheme } from "../../theme/types";
import { IUserListProps } from "./types";
import { IEndpointUserLists } from "../../api/types";

// ::
const UserLists: FC<IUserListProps> = ({ error, lists, loading }) => {
  const theme: ITheme = useTheme();

  // atoms: states
  const [retryGetUserLists, setRetryGetUserLists] =
    useRecoilState(atomHashUserList);

  return (
    <>
      <Heading variant="heading-5">Suas listas</Heading>
      <Stacker top="sm">
        <CreateList />
      </Stacker>
      {error && (
        <Stacker all="sm">
          <Heading variant="heading-5">Ocorreu um erro na listagem.</Heading>
          <Stacker top="sm">
            <Button onClick={() => setRetryGetUserLists(retryGetUserLists + 1)}>
              <MdRestartAlt /> Tentar novamente
            </Button>
          </Stacker>
        </Stacker>
      )}
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
