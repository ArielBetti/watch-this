import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { stringify } from "qs";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";
import {
  AVATAR_AYES,
  AVATAR_AYESBROWS,
  AVATAR_MOUTH,
  AVATAR_SKIN_COLOR,
} from "./options";
import AvatarOptionSelector from "./AvatarOptionSelector";

// atoms
import * as Atom from "./atoms";

// types
import {
  IAvatarAyes,
  IAvatarAyesBrow,
  IAvatarMouth,
  IAvatarSkinColor,
} from "./types";

const CustomAvatar = ({
  seed,
  setConstructAvatar,
}: {
  seed: string;
  setConstructAvatar: Dispatch<SetStateAction<any>>;
}) => {
  // CONSTANTS
  const AVATAR_BASE_URL = "https://avatars.dicebear.com/api/adventurer-neutral";

  // local: states
  const [ayes, setAyes] = useState<IAvatarAyes | any>("");
  const [ayesBrows, setAyesBrows] = useState<IAvatarAyesBrow | any>("");
  const [mouth, setMouth] = useState<IAvatarMouth | any>("");
  const [skinColor, setSkinColor] = useState<IAvatarSkinColor | any>("");

  const getAvatarSvg = () => {
    return createAvatar(style, {
      eyes: [ayes] || null,
      eyebrows: [ayesBrows] || null,
      mouth: [mouth] || null,
      seed: seed || "WatchThis",
      backgroundColor: skinColor || null,
      base64: true,
      flip: true,
    });
  };

  const getAvatarUrl = () => {
    let params = stringify(
      {
        backgroundColor: skinColor || null,
        eyes: [ayes] || null,
        eyebrows: [ayesBrows] || null,
        mouth: [mouth] || null,
        flip: true,
      },
      {
        encodeValuesOnly: true,
        arrayFormat: "brackets",
      }
    );

    return `${AVATAR_BASE_URL}/${encodeURIComponent(seed || "watchThis")}.svg${
      params ? "?" + params : ""
    }`;
  };

  const avatarSVG = getAvatarSvg();
  const avatarURL = getAvatarUrl();

  useEffect(() => {
    setConstructAvatar({
      backgroundColor: skinColor || null,
      eyes: [ayes] || null,
      eyebrows: [ayesBrows] || null,
      mouth: [mouth] || null,
      flip: true,
      url: avatarURL,
    });
  }, [avatarURL, ayes, ayesBrows, mouth, setConstructAvatar, skinColor]);

  return (
    <Atom.CustomAvatarContainer>
      <Atom.AvatarIllustration
        width="150px"
        src={avatarSVG}
        alt="Ilustração de perfil"
      />
      <Atom.AvatarOptions>
        <AvatarOptionSelector
          label="Olhos"
          setCurrentOption={setAyes}
          options={AVATAR_AYES}
          currentOption={ayes}
        />
        <AvatarOptionSelector
          label="Cor"
          setCurrentOption={setSkinColor}
          options={AVATAR_SKIN_COLOR}
          currentOption={skinColor}
        />
        <AvatarOptionSelector
          label="Sobrancelhas"
          setCurrentOption={setAyesBrows}
          options={AVATAR_AYESBROWS}
          currentOption={ayesBrows}
        />
        <AvatarOptionSelector
          label="Boca"
          setCurrentOption={setMouth}
          options={AVATAR_MOUTH}
          currentOption={mouth}
        />
      </Atom.AvatarOptions>
    </Atom.CustomAvatarContainer>
  );
};

export default CustomAvatar;
