import { atom } from "recoil";

export const listState = atom({
  key: "key",
  default: [],
  dangerouslyAllowMutability: true,
});
