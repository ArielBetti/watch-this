import { Dispatch, memo, SetStateAction, useCallback, useEffect } from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useTheme } from "styled-components";
import { Paragraph } from "webetti-react-sdk";
import { ITheme } from "../../theme/types";

// atoms
import * as Atom from "./atoms";

const AvatarOptionSelector = ({
  options,
  currentOption,
  setCurrentOption,
  label,
}: {
  options: string[];
  currentOption: string;
  setCurrentOption: Dispatch<SetStateAction<any>>;
  label: string;
}) => {
  const theme: ITheme = useTheme();
  let getIndex = options.findIndex((index) => index === currentOption);

  const onNextOptionChange = useCallback(() => {
    const changed = options[getIndex + 1];
    const changedIndex = options.findIndex((index) => index === changed);

    if (changedIndex > options?.length + 1 || changedIndex === -1) {
      return setCurrentOption(options[0]);
    }

    setCurrentOption(options[changedIndex]);
  }, [getIndex, options, setCurrentOption]);

  const onBackOptionChange = useCallback(() => {
    const changed = options[getIndex - 1];
    const changedIndex = options.findIndex((index) => index === changed);

    if (changedIndex === -1) {
      return setCurrentOption(options[options.length - 1]);
    }

    setCurrentOption(options[changedIndex]);
  }, [getIndex, options, setCurrentOption]);

  useEffect(() => {
    if (getIndex === -1) {
      getIndex = 1;
      setCurrentOption(options[0]);
    }
  }, []);

  return (
    <Atom.AvatarOptionsSelectorContainer>
      <Paragraph>{label}</Paragraph>
      <Atom.AvatarOptionsControls>
        <MdKeyboardArrowLeft
          color={theme?.colors?.primary}
          cursor="pointer"
          onClick={onBackOptionChange}
          size="25px"
        />
        <Paragraph>{`${getIndex}/${options?.length - 1}`}</Paragraph>
        <MdOutlineKeyboardArrowRight
          color={theme?.colors?.primary}
          cursor="pointer"
          onClick={onNextOptionChange}
          size="25px"
        />
      </Atom.AvatarOptionsControls>
    </Atom.AvatarOptionsSelectorContainer>
  );
};

export default memo(AvatarOptionSelector);
