import { atom } from "recoil";

export const dataShareState = atom<{ id: number; name: string; description: string; tag: string }[]>({
  key: "dataShare",
  default: [],
});