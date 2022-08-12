import merge from "deepmerge";

import { dark } from "./default";
import { ligth } from "./ligth";
import { ITheme } from "./types";

const selectTheme = (theme: string): ITheme => {
  let selectedTheme;

  switch (theme.toLowerCase()) {
    case "ligth":
      selectedTheme = ligth();
      break;

    default:
      selectedTheme = {};
      break;
  }

  const overwriteMerge = (
    __destinationArray: any,
    sourceArray: any,
    __options: any
  ) => sourceArray;

  return merge(dark(), selectedTheme, {
    arrayMerge: overwriteMerge,
  });
};

export default selectTheme;
