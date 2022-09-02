import { MdExitToApp } from "react-icons/md";
import { ITheme } from "../../theme/types";

export const dropdownItems = ({
  theme,
  navigate,
}: {
  theme: ITheme;
  navigate: any;
}) => [
  {
    icon: <MdExitToApp size="15px" color={theme?.colors?.primary} />,
    label: "Sair",
    action: () => navigate("/logout"),
  },
];
