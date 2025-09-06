import { type ReactNode } from "react";

type ResumeItemTy = {
  id: number;
  pjtName: string;
  css: string;
  content: string;
};

interface Action {
  type: number;
  act: ResumeItemTy;
}

type ButtonTy = {
  actState: ResumeItemTy;
  actDispatch: (bb: { type: number; act: ResumeItemTy }) => void;
};

type ContentTy = {
  actState: ResumeItemTy;
  children: ReactNode;
};

export type { ResumeItemTy, Action, ButtonTy, ContentTy };
