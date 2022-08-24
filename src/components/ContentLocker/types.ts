import { ReactNode } from "react";

export interface IContentLocker {
  unlock: boolean;
  children: ReactNode,
}
