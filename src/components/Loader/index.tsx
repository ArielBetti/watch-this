import { Oval } from "react-loader-spinner";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme/types";

// atoms: components
import * as Atom from "./atoms";

const Loader = ({
  disclaimer,
  open,
}: {
  disclaimer?: string;
  open: boolean;
}) => {
  const theme: ITheme = useTheme();

  if (!open) return <></>;

  return (
    <Atom.Container>
      <Atom.Loader>
        <Oval
          color={theme?.colors?.primary}
          secondaryColor={theme?.colors?.neutral?.pure}
          width="70px"
          ariaLabel="loading-indicator"
        />
        <Atom.Disclaimer>{disclaimer || "Carregando"}</Atom.Disclaimer>
      </Atom.Loader>
    </Atom.Container>
  );
};

export default Loader;
