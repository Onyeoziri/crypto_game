import { atom } from "jotai";

export const userAddressAtom = atom(null);
export const ethBalanceAtom = atom();
export const isLoginAtom = atom((get) => get(userAddressAtom) !== null);

//Local storage read
// eslint-disable-next-line no-unused-vars
//export const isLoginAtom = atom((get) => localStorage.getItem("userAddress") !== null);
