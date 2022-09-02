import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { stringify } from "qs";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";
import {
  AVATAR_ACCESSOIRES,
  AVATAR_EYES,
  AVATAR_EYESBROWS,
  AVATAR_MOUTH,
  AVATAR_SKIN_COLOR,
} from "./options";
import AvatarOptionSelector from "./AvatarOptionSelector";

// atoms
import * as Atom from "./atoms";

// types
import {
  TAvatarAccessoires,
  TAvatarEyes,
  TAvatarEyesBrow,
  TAvatarMouth,
  TAvatarSkinColor,
} from "./types";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";

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
  const [eyes, setEyes] = useState<TAvatarEyes | any>([]);
  const [eyesBrows, setEyesBrows] = useState<TAvatarEyesBrow | any>([]);
  const [mouth, setMouth] = useState<TAvatarMouth | any>([]);
  const [skinColor, setSkinColor] = useState<TAvatarSkinColor | any>([]);
  const [accessoires, setAccessoires] = useState<TAvatarAccessoires | any>([]);

  // recoil: states
  const user = useRecoilValue(atomUser);

  const getAvatarSvg = () => {
    return createAvatar(style, {
      accessoires: accessoires?.[0] ? accessoires : ["birthmark"],
      accessoiresProbability: accessoires?.[0] ? 100 : 0,
      eyes: eyes || null,
      eyebrows: eyesBrows || null,
      mouth: mouth || null,
      seed: seed || "WatchThis",
      backgroundColor: skinColor || null,
      base64: true,
      flip: true,
    });
  };

  const getAvatarUrl = () => {
    let params = stringify(
      {
        accessoires: accessoires?.[0] ? accessoires : ["birthmark"],
        accessoiresProbability: accessoires?.[0] ? 100 : 0,
        backgroundColor: skinColor || null,
        eyes: eyes || null,
        eyebrows: eyesBrows || null,
        mouth: mouth || null,
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
      accessoires: accessoires || null,
      backgroundColor: skinColor || null,
      eyes: eyes || null,
      eyebrows: eyesBrows || null,
      mouth: mouth || null,
      flip: true,
      url: avatarURL,
    });
  }, [avatarURL, eyes, eyesBrows, mouth, setConstructAvatar, skinColor]);

  useEffect(() => {
    if (user) {
      setSkinColor([user?.avatar?.backgroundColor?.[0]]);
      setEyes([user?.avatar?.eyes?.[0]]);
      setEyesBrows([user?.avatar?.eyebrows?.[0]]);
      setMouth([user?.avatar?.mouth?.[0]]);
      setAccessoires([user?.avatar?.accessoires?.[0]]);
    } else {
      getAvatarSvg();
    }
  }, [user]);

  return (
    <Atom.AvatarCard>
      <Atom.CustomAvatarContainer>
        <Atom.AvatarIllustration
          src={avatarSVG}
          alt="Ilustração de perfil"
          effect="blur"
        />
        <Atom.AvatarOptions>
          <AvatarOptionSelector
            label="Acessórios"
            setCurrentOption={setAccessoires}
            options={AVATAR_ACCESSOIRES}
            currentOption={accessoires}
          />
          <AvatarOptionSelector
            label="Olhos"
            setCurrentOption={setEyes}
            options={AVATAR_EYES}
            currentOption={eyes}
          />
          <AvatarOptionSelector
            label="Cor"
            setCurrentOption={setSkinColor}
            options={AVATAR_SKIN_COLOR}
            currentOption={skinColor}
          />
          <AvatarOptionSelector
            label="Sobrancelhas"
            setCurrentOption={setEyesBrows}
            options={AVATAR_EYESBROWS}
            currentOption={eyesBrows}
          />
          <AvatarOptionSelector
            label="Boca"
            setCurrentOption={setMouth}
            options={AVATAR_MOUTH}
            currentOption={mouth}
          />
        </Atom.AvatarOptions>
      </Atom.CustomAvatarContainer>
    </Atom.AvatarCard>
  );
};

export default CustomAvatar;
