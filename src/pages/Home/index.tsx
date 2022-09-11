import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { IEndpointUserLists } from "../../api/types";
import UserLists from "../../components/UserLists";
import { getUserLists } from "../../store/selectors";

const Home = () => {
  const [userLists, setUserLists] = useState<IEndpointUserLists[]>([]);

  const loadableUserList = useRecoilValueLoadable(getUserLists);

  useEffect(() => {
    if (
      loadableUserList.state === "hasValue" &&
      loadableUserList?.contents !== undefined
    ) {
      setUserLists(loadableUserList?.contents);
    }
  }, [loadableUserList.state]);

  return (
    <div>
      <UserLists
        lists={userLists}
        error={loadableUserList?.state === "hasError"}
        loading={loadableUserList?.state === "loading"}
      />
    </div>
  );
};

export default Home;
