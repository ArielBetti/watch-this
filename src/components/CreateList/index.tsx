import { MdAdd } from "react-icons/md";
import { useTheme } from "styled-components";
import { Paragraph } from "webetti-react-sdk";
import { ITheme } from "../../theme/types";

import * as Atom from "./atoms";

const CreateList = () => {
  const theme: ITheme = useTheme();

  return (
    <Atom.CreateListCard>
      <MdAdd size="20px" color={theme?.font?.colors?.pure} />
      <Paragraph>Criar nova lista</Paragraph>
    </Atom.CreateListCard>
  );
};

export default CreateList;
