import { ReactElement } from "react";
import { IContentLocker } from "./types";

const ContentLocker = ({ unlock, children }: IContentLocker): ReactElement => {
  if (unlock) {
    return <>{children}</>;
  }

  return <></>;
};

export default ContentLocker;
