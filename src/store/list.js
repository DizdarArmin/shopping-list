// store is a name for Redux files, not used on Recoil, and i think is not used on Context API either.

// This is not React code, is Recoil an external library.
// (even if is made by FB developers)

import { atom } from "recoil";

export const listState = atom({
  key: "key",
  default: [],
  dangerouslyAllowMutability: true,
});
